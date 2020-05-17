import React, { useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import * as Styled from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

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
        <Styled.Time past>
          <Styled.StrongTime>08:00</Styled.StrongTime>
          <Styled.Span>Bruno Domingues</Styled.Span>
        </Styled.Time>
        <Styled.Time>
          <Styled.StrongTime available>09:00</Styled.StrongTime>
          <Styled.Span available>Em aberto</Styled.Span>
        </Styled.Time>
        <Styled.Time>
          <Styled.StrongTime>10:00</Styled.StrongTime>
          <Styled.Span>Bruno Domingues</Styled.Span>
        </Styled.Time>
        <Styled.Time>
          <Styled.StrongTime>11:00</Styled.StrongTime>
          <Styled.Span>Bruno Domingues</Styled.Span>
        </Styled.Time>
      </Styled.List>
    </Styled.Container>
  );
}
