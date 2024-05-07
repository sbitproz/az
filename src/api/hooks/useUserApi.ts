import { useCallback, useRef } from "react";
import { api } from "../api.conf";
import { User, Users } from "./users.types";
import { ApiResults } from "../api.types";
import { useApiResponse } from "./useApiResponse";

export const useUserApi = () => {
  const { isLoading, setLoading, error, setError, data, setData } =
    useApiResponse<Users>();

  const cache = useRef("");

  const hasCalled = useCallback(
    (urlString: string) => {
      return cache.current === urlString;
    },
    [cache.current]
  );

  const getSearch = (search: string) => {
    if (!search) {
      return "";
    }
    return `&name.last_like=${search}`;
  };

  const fetchUsers = useCallback(
    async (page: number, pageSize: number, search: string) => {
      setLoading(true);
      try {
        const urlString = `?_limit=${pageSize}&_page=${page}${getSearch(
          search
        )}`;

        if (hasCalled(urlString)) {
          setLoading(false);
          return;
        }

        cache.current = urlString;

        const { data }: ApiResults<User> = await api.get(urlString);

        const dataMap = data.map((user, idx) => ({
          ...user,
          // data is not unique - sometimes records duplicate -
          // making the keys unique by index
          id: { ...user.id, value: `${user.id.value}-${idx}` },
        }));
        setData(dataMap);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
        return [];
      }
    },
    []
  );

  return {
    fetchUsers,
    isLoading,
    error,
    data: data ?? [],
  };
};
