import { useApiInterceptor } from "./api/hooks/useApiInterceptor";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./App.css";

function App() {
  const { ready } = useApiInterceptor();

  if (!ready) {
    return null
  }

  return <RouterProvider router={router} />;

}

export default App;
