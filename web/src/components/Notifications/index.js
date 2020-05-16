import React, { useState, useEffect, useMemo } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import * as Styled from './styles';

function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () => !!notifications.find((notification) => notification.read === false),
    [notifications]
  );

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      const data = response.data.map((notification) => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        ),
      }));

      setNotifications(data);
    }

    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map((notification) =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  return (
    <Styled.Container>
      <Styled.Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <Styled.IconNotification />
      </Styled.Badge>

      <Styled.NotificationList visible={visible}>
        <Styled.Scroll>
          {notifications.map((notification) => (
            <Styled.Notification
              key={notification._id}
              unread={!notification.read}
            >
              <Styled.NotificationText>
                {notification.content}
              </Styled.NotificationText>
              <Styled.NotificationTime>
                {notification.timeDistance}
              </Styled.NotificationTime>
              {!notification.read && (
                <Styled.NotificationButton
                  onClick={() => handleMarkAsRead(notification._id)}
                >
                  Marcar como lida
                </Styled.NotificationButton>
              )}
            </Styled.Notification>
          ))}
        </Styled.Scroll>
      </Styled.NotificationList>
    </Styled.Container>
  );
}

export default Notifications;
