import { App } from 'antd';
import { useToastNotification } from './useToastNotification';
import { NotificationInstance } from 'antd/es/notification/interface';
import { useAppProps } from 'antd/es/app/context';

vi.mock('antd');

vi.spyOn(App, 'useApp').mockReturnValue({
  notification: {
    info: vi.fn(),
    error: vi.fn(),
  } as unknown as NotificationInstance,
} as useAppProps),
  describe('useToastNotification', () => {
    it('should return showInfoToastNotification', () => {
      const { showInfoToastNotification } = useToastNotification();
      expect(showInfoToastNotification).toBeDefined();
    });

    it('should return showErrorToastNotification', () => {
      const { showErrorToastNotification } = useToastNotification();
      expect(showErrorToastNotification).toBeDefined();
    });
  });
