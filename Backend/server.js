const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/analyze", async (req, res) => {

  const transcript = req.body.transcript;

  const prompt = `
You are an expert employee performance evaluator.

Scoring Rules:

1-3 = Poor performance
4-6 = Average performance
7-8 = Good performance
9-10 = Excellent performance

Analyze the supervisor transcript carefully.

Transcript:
"""
${transcript}
"""

Return ONLY valid JSON.

Format:

{
  "score": number,
  "summary": "short explanation",

  "evidence": [
    {
      "quote": "exact quote",
      "type": "positive"
    }
  ],

  "strengths": [
    "strength"
  ],

  "weaknesses": [
    "weakness"
  ],
  "kpiMapping": [
  "Productivity",
  "Communication"
],
"gapAnalysis": [
  "No mention of leadership skills"
]

  "followUpQuestions": [
    "question"
  ]
}

Important:
- Give realistic scores
- Do not give very low scores unless performance is clearly bad
- Use evidence from transcript
- Include at least 2 evidence items if possible
`;

  try {

    const response = await fetch(
      "http://localhost:11434/api/generate",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          model: "llama3.2",
          prompt: prompt,
          stream: false,
        }),
      }
    );

    const data = await response.json();

    res.json({
      result: data.response,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Something went wrong",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});