import { Table } from "antd";
import { useUsers } from "./useUsers";
import { User } from "../../api/hooks/users.types";
import { pageSizeOptions, userColumns } from "./Users.constants";
import { getRowKey } from "./Users.util";
import { tableStyles } from "@/common/styles/table.styles";
import { UserSearch } from "./components/UserSearch/UserSearch";
import { Content, Header } from "./Users.styles";
import { ErrorBoundary } from "@components/ErrorBoundary/ErrorBoundary";
import { somethingWentWrong } from "@components/ErrorBoundary/ErrorBoundary.utils";
import { Title } from "@/common/components/Typography/Typography";

const userErrorLabel = somethingWentWrong("the user table");

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
        <Title>Users</Title>
        <UserSearch onSearchQuery={onSearchQuery} />
      </Header>
      <Content>
        <ErrorBoundary label={userErrorLabel}>
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
        </ErrorBoundary>
      </Content>
    </>
  );
};
