import { App } from 'antd';
import { NOTIFICATION_PLACEMENT } from './useToastNotification.const';
import { globalEnv } from '@/globalEnv';
import {
  NotificationDescription,
  NotificationMessage,
} from './useToastNotification.styles';

export enum NOTIFICATION_TYPE {
  INFO = 'info',
  ERROR = 'error',
}

export interface ShowNotification {
  message: string;
  description?: string;
}

interface ShowNotificationWithType extends ShowNotification {
  type: NOTIFICATION_TYPE;
}

export const useToastNotification = () => {
  const { notification } = App.useApp();

  const showToastNotification = ({
    message,
    description,
    type,
  }: ShowNotificationWithType) => {
    notification[type]({
      message: <NotificationMessage>{message}</NotificationMessage>,
      description: (
        <NotificationDescription>{description ?? ''}</NotificationDescription>
      ),
      placement: NOTIFICATION_PLACEMENT,
      duration: globalEnv.NOTIFICATION_DURATION,
    });
  };

  const showInfoToastNotification = (notificationInfo: ShowNotification) => {
    showToastNotification({
      type: NOTIFICATION_TYPE.INFO,
      ...notificationInfo,
    });
  };

  const showErrorToastNotification = (notificationInfo: ShowNotification) => {
    showToastNotification({
      type: NOTIFICATION_TYPE.ERROR,
      ...notificationInfo,
    });
  };

  return {
    showInfoToastNotification,
    showErrorToastNotification,
  };
};
