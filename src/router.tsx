import { Layout } from "@/domains/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import { Users } from "./domains/Users/Users";
import { ErrorBoundary } from "./common/components/ErrorBoundary/ErrorBoundary";

const ROUTE_CONFIG = {
  USER_LIST: {
    route: "/",
    title: "Users",
  },
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: ROUTE_CONFIG.USER_LIST.route,
        element: <Users />,
      },
    ],
    errorElement: <ErrorBoundary label="Something went wrong..." />,
  },
]);
