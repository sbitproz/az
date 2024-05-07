import { Table } from "antd";
import { useUsers } from "./useUsers";
import { User } from "../../api/hooks/users.types";
import { pageSizeOptions, userColumns } from "./Users.constants";
import { getRowKey } from "./Users.util";
import { tableStyles } from "@/common/styles/table.styles";
import { UserSearch } from "./components/UserSearch/UserSearch";
import { Header } from "./Users.styles";
import { Content } from "antd/es/layout/layout";

export const Users = () => {
  const {
    onTableChange,
    onSearchQuery,
    users,
    isLoading,
    totalUserCount,
    queryValues,
  } = useUsers();

  return (
    <>
      <Header>
        <UserSearch onSearchQuery={onSearchQuery} />
      </Header>
      <Content style={{ overflowY: "auto", padding: 50 }}>
        <Table<User>
          css={tableStyles}
          columns={userColumns}
          dataSource={users}
          rowKey={getRowKey}
          onChange={onTableChange}
          loading={isLoading}
          pagination={{
            total: totalUserCount,
            pageSizeOptions,
            pageSize: queryValues.pageSize,
            current: queryValues.current,
          }}
        />
      </Content>
    </>
  );
};
