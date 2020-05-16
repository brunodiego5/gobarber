import React from 'react';

import * as Styled from './styles';

function Notifications() {
  return (
    <Styled.Container>
      <Styled.Badge hasUnread>
        <Styled.IconNotification />
      </Styled.Badge>

      <Styled.NotificationList>
        <Styled.Scroll>
          <Styled.Notification unread>
            <Styled.NotificationText>
              Você possui um novo agendamento para amanhã
            </Styled.NotificationText>
            <Styled.NotificationTime>há 2 dias</Styled.NotificationTime>
            <Styled.NotificationButton>
              Marcar como lida
            </Styled.NotificationButton>
          </Styled.Notification>
          <Styled.Notification>
            <Styled.NotificationText>
              Você possui um novo agendamento para amanhã
            </Styled.NotificationText>
            <Styled.NotificationTime>há 2 dias</Styled.NotificationTime>
            <Styled.NotificationButton>
              Marcar como lida
            </Styled.NotificationButton>
          </Styled.Notification>
          <Styled.Notification>
            <Styled.NotificationText>
              Você possui um novo agendamento para amanhã
            </Styled.NotificationText>
            <Styled.NotificationTime>há 2 dias</Styled.NotificationTime>
            <Styled.NotificationButton>
              Marcar como lida
            </Styled.NotificationButton>
          </Styled.Notification>
          <Styled.Notification>
            <Styled.NotificationText>
              Você possui um novo agendamento para amanhã
            </Styled.NotificationText>
            <Styled.NotificationTime>há 2 dias</Styled.NotificationTime>
            <Styled.NotificationButton>
              Marcar como lida
            </Styled.NotificationButton>
          </Styled.Notification>
          <Styled.Notification>
            <Styled.NotificationText>
              Você possui um novo agendamento para amanhã
            </Styled.NotificationText>
            <Styled.NotificationTime>há 2 dias</Styled.NotificationTime>
            <Styled.NotificationButton>
              Marcar como lida
            </Styled.NotificationButton>
          </Styled.Notification>
          <Styled.Notification>
            <Styled.NotificationText>
              Você possui um novo agendamento para amanhã
            </Styled.NotificationText>
            <Styled.NotificationTime>há 2 dias</Styled.NotificationTime>
            <Styled.NotificationButton>
              Marcar como lida
            </Styled.NotificationButton>
          </Styled.Notification>
        </Styled.Scroll>
      </Styled.NotificationList>
    </Styled.Container>
  );
}

export default Notifications;
