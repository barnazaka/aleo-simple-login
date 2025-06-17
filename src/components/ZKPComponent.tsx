import { useState } from "react";

function ZKPComponent() {
  const [proofStatus, setProofStatus] = useState<string>("Not generated");

  const generateProof = () => {
    // Placeholder for calling zkp_template.aleo
    setProofStatus("Proof generation not implemented");
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-lg border p-4">
      <span className="text-xl font-bold">ZKP Interaction</span>
      <button
        onClick={generateProof}
        className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
      >
        Generate ZKP
      </button>
      <p>{proofStatus}</p>
    </div>
  );
}

export default ZKPComponent;