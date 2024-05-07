import { Users } from "./domains/Users/Users";
import "./App.css";
import { useApiInterceptor } from "./api/hooks/useApiInterceptor";
import { Layout } from "@/domains/Layout/Layout";

function App() {
  useApiInterceptor();

  return (
    <Layout>
      <Users />
    </Layout>
  );
}

export default App;
