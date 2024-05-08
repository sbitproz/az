import useOnMount from "@/common/hooks/useOnMount/useOnMount";
import { api } from "../api.conf";
import {
  ShowNotification,
  useToastNotification,
} from "@/common/hooks/useToastNotification/useToastNotification";
import { useState } from "react";
import { AxiosResponse } from "axios";

interface Error {
  response: { status: number; statusText: string };
}

const handleSuccessResponse = (response: AxiosResponse<unknown, unknown>) => {
  return response;
};

const ERRORS = {
  ACTION_UNAUTHORIZED: "Unauthorised",
  ACTION_NOT_FOUND: "Not Found",
  ERROR_NETWORK: "Network Error",
};

const handleErrorResponse =
  (errorToast: (showNotification: ShowNotification) => void) =>
  (error: Error) => {
    if (!error?.response) {
      errorToast({
        message: ERRORS.ERROR_NETWORK,
        description: "Unable to connect to the server",
      });
    }

    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          errorToast({ message: ERRORS.ACTION_UNAUTHORIZED });
          break;
        case 404:
          errorToast({
            message: ERRORS.ACTION_NOT_FOUND,
            description: "API route not found",
          });
          break;
        default:
          errorToast({
            message: `Error Status: ${error.response.status}`,
            description: error.response.statusText,
          });
          break;
      }
    }
    return Promise.reject(error);
  };

export const useApiInterceptor = () => {
  const { showErrorToastNotification } = useToastNotification();
  const [ready, setReady] = useState(false);

  useOnMount(() => {
    api.interceptors.response.use(
      handleSuccessResponse,
      handleErrorResponse(showErrorToastNotification)
    );
    setReady(true);
  });

  return { ready };
};
