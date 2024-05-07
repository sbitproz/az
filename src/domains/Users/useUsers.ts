import { useUserApi } from "@/api/hooks/useUserApi";
import { globalEnv } from "@/globalEnv";
import { TablePaginationConfig } from "antd";
import { useCallback, useEffect, useState } from "react";

export const useUsers = () => {
  const { isLoading, fetchUsers, data: users } = useUserApi();

  const [queryValues, setQueryValues] = useState({
    current: 1,
    pageSize: 10,
    search: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      await fetchUsers(
        queryValues.current,
        queryValues.pageSize,
        queryValues.search
      );
    };

    fetchData();
  }, [queryValues]);

  const onTableChange = useCallback(
    async (pagination: TablePaginationConfig) => {
      if (pagination.current && pagination.pageSize) {
        setQueryValues({
          search: "",
          current: pagination.current,
          pageSize: pagination.pageSize,
        });
      }
    },
    []
  );

  const onSearchQuery = useCallback(async (searchValue: string) => {
    setQueryValues({
      ...queryValues,
      search: searchValue,
      current: 1,
    });
  }, []);

  return {
    users,
    isLoading,
    onTableChange,
    onSearchQuery,
    totalUserCount: !!queryValues.search
      ? users?.length
      : globalEnv.TOTAL_RECORD_COUNT,
    queryValues,
  };
};
