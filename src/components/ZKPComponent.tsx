import { AleoTx } from "@puzzlehq/sdk";

type ZKPComponentProps = {
  loading: boolean;
  tx: AleoTx | undefined;
  error: string | undefined;
};

function ZKPComponent({ loading, tx, error }: ZKPComponentProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-lg border p-4">
      <span className="text-xl font-bold">ZKP Interaction</span>
      {loading && <p>Generating proof...</p>}
      {tx && (
        <div>
          <p>Proof generated successfully!</p>
          <p>Transaction ID: {tx.txId}</p>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default ZKPComponent;