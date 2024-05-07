import { Users } from "./domains/Users/Users";
import { useApiInterceptor } from "./api/hooks/useApiInterceptor";
import { Layout } from "@/domains/Layout/Layout";
import "./App.css";

function App() {
  const { ready } = useApiInterceptor();

  return <Layout>{ready && <Users />}</Layout>;
}

export default App;
