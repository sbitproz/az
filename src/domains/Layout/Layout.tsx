import { PropsWithChildren } from "react";
import { BaseLayout } from "./Layout.styles";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <BaseLayout>
      <BaseLayout>
        {children}
      </BaseLayout>
    </BaseLayout>
  );
};
