import useOnMount from "@/common/hooks/useOnMount/useOnMount";
import { api } from "../api.conf";
import {
  ShowNotification,
  useToastNotification,
} from "@/common/hooks/useToastNotification/useToastNotification";

const handleSuccessResponse = (response: any) => {
  return response;
};

const ERRORS = {
  ACTION_UNAUTHORIZED: "Unauthorised",
  ACTION_NOT_FOUND: "Not Found",
  ERROR_NETWORK: "Network Error",
};

const handleErrorResponse =
  (errorToast: (showNotification: ShowNotification) => any) => (error: any) => {
    console.error(error);

    if (!error?.response) {
      errorToast({ message: ERRORS.ERROR_NETWORK, description: 'Unable to connect to the server' });
    }

    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          errorToast({ message: ERRORS.ACTION_UNAUTHORIZED });
          break;
        case 404:
          errorToast({ message: ERRORS.ACTION_NOT_FOUND });
          break;
        default:
          errorToast({
            message: error.response.status,
            description: error.response.statusText,
          });
          break;
      }
    }
    return Promise.reject(error);
  };

export const useApiInterceptor = () => {
  const { showErrorToastNotification } = useToastNotification();

  useOnMount(() => {
    api.interceptors.response.use(
      handleSuccessResponse,
      handleErrorResponse(showErrorToastNotification)
    );
  });
};
