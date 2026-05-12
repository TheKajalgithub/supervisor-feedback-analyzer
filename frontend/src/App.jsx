import { useState } from "react";

function App() {
  const [transcript, setTranscript] = useState("");
  const [result, setResult] = useState(null);

  const runAnalysis = async () => {
    try {
      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transcript: transcript,
        }),
      });

      const data = await response.json();

     setResult(JSON.parse(data.result));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Supervisor Feedback Analyzer</h1>

      <textarea
        rows="10"
        cols="60"
        placeholder="Paste supervisor transcript here..."
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
      />

      <br />
      <br />

      <button onClick={runAnalysis}>
        Run Analysis
      </button>

     <div
  style={{
    backgroundColor: "#fff3cd",
    padding: "10px",
    marginTop: "20px",
    borderRadius: "8px",
  }}
>
  ⚠ AI-generated draft. Please review before finalizing.
</div>

     {result && (
  <div style={{ marginTop: "20px" }}>

    <h2>Suggested Score</h2>
    <div
      style={{
         padding: "10px",
         border: "1px solid #ccc",
         borderRadius: "8px",
        marginBottom: "20px"
}}
    >
      {result.score}/10
    </div>

    <h2>Summary</h2>
    <div
      style={{
        padding: "10px",
        border: "1px solid gray",
        marginBottom: "20px",
      }}
    >
      {result.summary}
    </div>

    <h2>Strengths</h2>
    <ul>
      {result.strengths.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

    <h2>Weaknesses</h2>
    <ul>
      {result.weaknesses.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

    <h2>Evidence</h2>

    <h2>Follow-Up Questions</h2>

<ul>
  {result.followUpQuestions.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

{result.evidence.map((item, index) => (
  <div
    key={index}
    style={{
      border: "1px solid gray",
      padding: "10px",
      marginBottom: "10px",
    }}
  >
    <p>{item.quote}</p>

    <strong>{item.type}</strong>
  </div>
))}

<h2>KPI Mapping</h2>

<ul>
  {result.kpiMapping.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

<h2>Gap Analysis</h2>

<ul>
  {result.gapAnalysis.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

  </div>
)}
    </div>
  );
}

export default App;