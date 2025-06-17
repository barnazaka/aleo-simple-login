import { useAccount } from "@puzzlehq/sdk";

function Dashboard() {
  const { account } = useAccount();

  if (!account) {
    return <p>Loading account info...</p>;
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <p className="text-xl">Connected Wallet: {account.address}</p>
    </div>
  );
}

export default Dashboard;