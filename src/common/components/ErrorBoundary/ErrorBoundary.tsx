import { ErrorBoundary as BoundaryBase } from "react-error-boundary";
import { Error, ErrorSize } from "../Error/Error";
import { PropsWithChildren } from "react";

interface ErrorBoundary {
  label: string;
}

export const ErrorBoundary = ({
  label,
  children,
}: PropsWithChildren<ErrorBoundary>) => {
  return (
    <BoundaryBase
      data-testid="error-boundary"
      fallback={<Error size={ErrorSize.LG} label={label} />}
    >
      {children}
    </BoundaryBase>
  );
};
