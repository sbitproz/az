import { Content } from "antd/es/layout/layout";
import { PropsWithChildren } from "react";
import { BaseLayout } from "./Layout.styles";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <BaseLayout>
      <BaseLayout>
        <Content>{children}</Content>
      </BaseLayout>
    </BaseLayout>
  );
};
