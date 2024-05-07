import { Table } from "antd";
import { useUsers } from "./useUsers";
import { User } from "../../api/hooks/users.types";
import { userColumns } from "./Users.constants";
import { getRowKey } from "./Users.util";
import { tableStyles } from "@/common/styles/table.styles";
import { UserSearch } from "./components/UserSearch/UserSearch";
import { Header } from "./Users.styles";

export const Users = () => {
  const { onTableChange, onSearchQuery, users, isLoading, totalUserCount } = useUsers();

  return (
    <>
      <Header>
        <UserSearch onSearchQuery={onSearchQuery} />
      </Header>
      <Table<User>
        css={tableStyles}
        columns={userColumns}
        dataSource={users}
        rowKey={getRowKey}
        onChange={onTableChange}
        loading={isLoading}
        pagination={{
          total: totalUserCount,
          pageSizeOptions: ['15', '25', '50']
        }}
      />
    </>
  );
};
