import { useCallback } from "react";
import { api } from "../api.conf";
import { User, Users } from "./users.types";
import { ApiResults } from "../api.types";
import { useApiResponse } from "./useApiResponse";

export const useUserApi = () => {
  const {
    isLoading,
    setLoading,
    error,
    setError,
    data,
    setData,
    meta,
    setMeta,
  } = useApiResponse<Users>();

  const fetchUsers = useCallback(async (page: number, pageSize: number, search: string) => {
    setLoading(true);
    try {
      const { data }: ApiResults<User> = await api.get(
        `&results=${pageSize}&page=${page}`
      );

      const dataMap = data.results.map((user, idx) => ({
        ...user,
        // data is not unique - sometimes records duplicate -
        // making the keys unique by index
        id: { ...user.id, value: `${user.id.value}-${idx}` },
      }));
      setData(dataMap);
      setMeta(data.info);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
      return [];
    }
  }, []);

  return {
    fetchUsers,
    isLoading,
    error,
    data,
    meta,
  };
};
