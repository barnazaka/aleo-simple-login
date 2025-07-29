import { useExecute } from "@puzzlehq/sdk";
import { useState } from "react";

function CVPage() {
  const [cv, setCv] = useState<File | null>(null);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const { execute, loading } = useExecute({
    programId: "zkp_template.aleo",
    functionName: "generate_proof",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCv(e.target.files[0]);
    }
  };

  const handleFieldSelection = (field: string) => {
    setSelectedFields((prev) =>
      prev.includes(field)
        ? prev.filter((f) => f !== field)
        : [...prev, field]
    );
  };

  const handleShare = async () => {
    if (!cv) return;

    // This is a placeholder for actual CV parsing
    const cvData = {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
    };

    const inputs = selectedFields.map((field) => {
      const key = field as keyof typeof cvData;
      return `${cvData[key]} as field`;
    });

    const response = await execute(inputs);
    console.log("execute response", response);
    alert(`Sharing selected fields: ${selectedFields.join(", ")}`);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-lg border p-4">
      <span className="text-xl font-bold">Upload Your CV</span>
      <input type="file" onChange={handleFileChange} />
      {cv && (
        <div className="flex flex-col gap-2">
          <p>Select fields to share:</p>
          {/* This is a placeholder for actual CV parsing */}
          <label>
            <input
              type="checkbox"
              onChange={() => handleFieldSelection("name")}
            />
            Name
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFieldSelection("email")}
            />
            Email
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleFieldSelection("phone")}
            />
            Phone
          </label>
        </div>
      )}
      <button
        onClick={handleShare}
        className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
        disabled={!cv || selectedFields.length === 0 || loading}
      >
        {loading ? "Sharing..." : "Share Selected Info"}
      </button>
    </div>
  );
}

export default CVPage;
