import { useState } from "react";

export default function AskPortfolio() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {

    if (!question) return;

    setLoading(true);

    const res = await fetch(
      "https://bndlvbpssc.execute-api.us-east-1.amazonaws.com/prod/ask",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question })
      }
    );

    const data = await res.json();

    setAnswer(data.answer);
    setLoading(false);
  }

  return (
    <div className="mt-20 p-6 border rounded-xl max-w-xl mx-auto">

      <h2 className="text-2xl font-bold mb-4">
        Ask My Portfolio AI
      </h2>

      <input
        className="w-full border p-3 rounded-md"
        placeholder="Ask about my AWS projects..."
        value={question}
        onChange={(e)=>setQuestion(e.target.value)}
      />

      <button
        onClick={askAI}
        className="mt-4 bg-black text-white px-6 py-2 rounded-md"
      >
        Ask
      </button>

      {loading && (
        <p className="mt-4">Thinking...</p>
      )}

      {answer && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          {answer}
        </div>
      )}

    </div>
  );
}
