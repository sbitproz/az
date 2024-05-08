import { BaseLayout } from "./Layout.styles";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <BaseLayout>
      <BaseLayout>
        <Outlet />
      </BaseLayout>
    </BaseLayout>
  );
};
