import {AsyncStorage} from 'react-native';
import {Notifications, Permissions} from 'expo';
import storageKey from './constants';

function createNotification() {
  return {
    title: 'Ready to Challenge ❤ ',
    body: 'Let\'s add some new Questions so as not to forget answers 😈',
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  };
}

export default async function setLocalNotification() {
  const {NOTIFICATION_KEY} = storageKey;
  const notification = await AsyncStorage.getItem(NOTIFICATION_KEY);
  const hasNotification = JSON.parse(notification);

  if (hasNotification === null) {
    const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (permission.status === 'granted') {
      Notifications.cancelAllScheduledNotificationsAsync();

      let nextWeek = new Date();
      nextWeek.setDate(nextWeek.getDate() + 7);
      nextWeek.setHours(19);
      nextWeek.setMinutes(28);

      Notifications.scheduleLocalNotificationAsync(
          createNotification(),
          {
            time: nextWeek,
            repeat: 'week',
          },
      );

      AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
    }
  }
}