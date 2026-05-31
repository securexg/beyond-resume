import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { resumeText, targetRole } = await request.json();

    if (!resumeText || !targetRole) {
      return NextResponse.json(
        { error: "Missing resume text or target role" },
        { status: 400 }
      );
    }

    const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
    
    if (!DEEPSEEK_API_KEY) {
      return NextResponse.json(
        { error: "DeepSeek API key not configured" },
        { status: 500 }
      );
    }

    const prompt = `You are a career advisor specializing in the Indian job market. Analyze this resume for a job seeker targeting the role: "${targetRole}".

Resume text:
${resumeText}

Return a JSON response with this exact structure:
{
  "atsScore": number (0-100),
  "keywordGaps": string[],
  "strengths": string[],
  "weaknesses": string[],
  "skillRoadmap": {
    "missingSkills": string[],
    "learningResources": [{ "skill": string, "resource": string, "timeEstimate": string }],
    "priority": "high" | "medium" | "low"
  },
  "hiringProbability": {
    "score": number (0-100),
    "breakdown": {
      "skillsMatch": number (0-100),
      "experience": number (0-100),
      "education": number (0-100),
      "overall": number (0-100)
    },
    "reasoning": string
  },
  "salaryRange": {
    "min": number (in LPA),
    "max": number (in LPA),
    "average": number (in LPA),
    "context": string
  },
  "rewriteSuggestions": string[],
  "roleRecommendations": [{ "title": string, "matchScore": number (0-100), "reasoning": string }],
  "interviewPrepTopics": string[]
}

For roleRecommendations, suggest 3 alternative roles the candidate is well-suited for based on their skills. For interviewPrepTopics, provide 6-8 specific topics or questions they should prepare for. Use Indian context: ₹ LPA for salaries, reference Indian companies, job portals like Naukri/LinkedIn India. Be specific and actionable.`;

    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: "You are a career advisor specializing in the Indian job market. Always return valid JSON.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
        response_format: { type: "json_object" },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("DeepSeek API error:", error);
      return NextResponse.json(
        { error: "Failed to analyze resume" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const analysis = JSON.parse(data.choices[0].message.content);

    return NextResponse.json(analysis);
  } catch (error) {
    console.error("Analysis error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
