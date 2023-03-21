import logo from "./logo.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Trade from "./Components/Trade";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Trade />
    </QueryClientProvider>
  );
}

export default App;
