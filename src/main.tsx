import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PuzzleWalletProvider } from "@puzzlehq/sdk";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DAppContextProvider } from "./hooks/useDapp";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <PuzzleWalletProvider>
      <DAppContextProvider>
        <div className="h-screen w-screen">
          <App />
        </div>
      </DAppContextProvider>
    </PuzzleWalletProvider>
  </QueryClientProvider>
);