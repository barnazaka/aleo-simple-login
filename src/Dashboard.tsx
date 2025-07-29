import { useAccount } from "@puzzlehq/sdk";
import CVPage from "./components/CVPage";

function Dashboard() {
  const { account } = useAccount();

  if (!account) {
    return <p>Loading account info...</p>;
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <CVPage />
    </div>
  );
}

export default Dashboard;