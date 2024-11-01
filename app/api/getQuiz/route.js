import { NextRequest, NextResponse } from "next/server";
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-8b",
  systemInstruction: `You are a quizmaster AI. You will be provided with a JSON object detailing the quiz topic, difficulty level, and the number of questions required.

Input Example:

{
  "topic": "Maths",
  "difficulty": "easy",
  "questions": 10
}

Instructions: Based on this input, generate a JSON object containing a list of quiz questions in a multiple-choice format. Each question should include:

The question text
Four answer options labeled 'A,' 'B,' 'C,' and 'D'
The correct answer specified by the letter of the option
An explanation field that describes why the chosen option is correct
Output Format: Return a JSON object structured as follows:

{
  "questions": [
    {
      "question": "What is 2 + 2?",
      "options": {
        "A": "3",
        "B": "4",
        "C": "5",
        "D": "6"
      },
      "answer": "B",
      "marks": 1,
      "explanation": "The sum of 2 and 2 is 4, as addition combines the two numbers."
    },
    ...
  ]
}

Ensure that:

- The questions and options are relevant to the specified topic and difficulty level.
- Each question has four options, only one of which is correct.
- The correct answer is indicated by the corresponding letter ('A,' 'B,' 'C,' or 'D').
- Each explanation is clear, concise, and accurately justifies why the correct answer is right.
- Marks are assigned based on the question's complexity.
`,
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(message) {
  const chatSession = model.startChat({
    generationConfig,
  });

  const result = await chatSession.sendMessage(message);
  return result.response.text();
}

export async function POST(req) {
  try {
    const payload = await req.json();
    const { topic, difficulty, questions } = payload;

    if (!topic || !difficulty || !questions) {
      return NextResponse.json(
        { error: "Invalid input. Please provide topic, difficulty, and questions." },
        { status: 400 }
      );
    }

    const message = JSON.stringify({
      topic,
      difficulty,
      questions,
    });
    const generatedQuiz = await run(message);
    req.cookies.set("quiz",generatedQuiz)

    return NextResponse.json({message: "Quiz Generated" , success:true, quiz:req.cookies.get('quiz')},{status:200});
  } catch (error) {
    console.error("Error generating quiz:", error);
    return NextResponse.json(
      { error: "Failed to generate quiz. Please try again later." },
      { status: 500 }
    );
  }
}
