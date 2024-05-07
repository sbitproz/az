import { useUserApi } from "@/api/hooks/useUserApi";
import useOnMount from "@/common/hooks/useOnMount/useOnMount";
import { globalEnv } from "@/globalEnv";
import { TablePaginationConfig } from "antd";
import { useCallback, useEffect, useState } from "react";

export const useUsers = () => {
  const { isLoading, fetchUsers, data: users } = useUserApi();

  const [queryValues, setQueryValues] = useState({current: 1, pageSize: 15, search: ''});

  

  useOnMount(() => {
    const fetchData = async () => {
      await fetchUsers(1, 15, '');
    };

    fetchData();
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetchUsers(queryValues.current, queryValues.pageSize);
  //   };

  //   fetchData();
  // }, [
  //   queryValues
  // ])

  const onTableChange = useCallback(
    async (pagination: TablePaginationConfig) => {
      if (pagination.current && pagination.pageSize) {
        fetchUsers(pagination.current, pagination.pageSize, '');
      }
    },
    []
  );

  const onSearchQuery = useCallback(
    async (searchValue: string) => {

      if (searchValue) {
        fetchUsers(queryValues.current, queryValues.pageSize, searchValue);
      }
    },
    []
  );


  return {
    users,
    isLoading,
    onTableChange,
    onSearchQuery,
    totalUserCount: globalEnv.TOTAL_RECORD_COUNT,

  };
};
