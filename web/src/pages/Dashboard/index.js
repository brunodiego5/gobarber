import React, { useState, useMemo, useEffect } from 'react';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import * as Styled from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const [schedule, setShedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', {
        params: { date },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map((hour) => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find((a) =>
            isEqual(parseISO(a.datae), compareDate)
          ),
        };
      });

      setShedule(data);
    }

    loadSchedule();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Button type="button" onClick={handlePrevDay}>
          <Styled.IconLeft size={36} color="#fff" />
        </Styled.Button>

        <Styled.Strong>{dateFormatted}</Styled.Strong>

        <Styled.Button type="button" onClick={handleNextDay}>
          <Styled.IconRight size={36} color="#fff" />
        </Styled.Button>
      </Styled.Header>

      <Styled.List>
        {schedule.map((time) => (
          <Styled.Time
            key={time.time}
            past={time.past}
            available={!time.appointment}
          >
            <Styled.StrongTime>{time.time}</Styled.StrongTime>
            <Styled.Span>
              {time.appointment ? time.appointment.user.name : 'Em aberto'}
            </Styled.Span>
          </Styled.Time>
        ))}
      </Styled.List>
    </Styled.Container>
  );
}
