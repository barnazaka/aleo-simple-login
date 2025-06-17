import { useAccount } from "@puzzlehq/sdk";
import Dashboard from "./Dashboard";
import Header from "./components/header";
import { useDappState } from "./hooks/useDapp";

function App() {
  const { connect, isConnecting } = useDappState();
  const { account } = useAccount();

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Header address={account?.address} />
      <div className="h-full w-full items-center pb-4 pt-20 align-middle">
        {isConnecting && !account && (
          <div className="h-full w-full text-center align-middle">
            Loading...
          </div>
        )}
        {account && <Dashboard />}
        {!isConnecting && !account && (
          <div className="h-full w-full flex items-center justify-center">
            <button
              onClick={() => connect?.()}
              className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
            >
              Connect Wallet
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;