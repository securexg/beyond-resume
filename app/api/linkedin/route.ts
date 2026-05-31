import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { linkedinUrl } = await request.json();

    if (!linkedinUrl) {
      return NextResponse.json(
        { error: "LinkedIn URL is required" },
        { status: 400 }
      );
    }

    // Validate LinkedIn URL format
    const linkedinRegex = /https?:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?/;
    if (!linkedinRegex.test(linkedinUrl)) {
      return NextResponse.json(
        { error: "Invalid LinkedIn URL format" },
        { status: 400 }
      );
    }

    // Extract profile handle from URL
    const profileHandle = linkedinUrl.match(/linkedin\.com\/in\/([\w-]+)/)?.[1];
    if (!profileHandle) {
      return NextResponse.json(
        { error: "Could not extract profile handle from URL" },
        { status: 400 }
      );
    }

    // Use Proxycurl API for LinkedIn data extraction
    const PROXYCURL_API_KEY = process.env.PROXYCURL_API_KEY;
    
    if (!PROXYCURL_API_KEY) {
      return NextResponse.json(
        { 
          error: "LinkedIn data extraction service not configured",
          message: "Please use the manual text input option instead"
        },
        { status: 503 }
      );
    }

    const response = await fetch(
      `https://nubela.co/proxycurl/api/v2/linkedin/person/extracted?url=${encodeURIComponent(linkedinUrl)}`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${PROXYCURL_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Proxycurl API error:", errorText);
      
      if (response.status === 401) {
        return NextResponse.json(
          { error: "Invalid API key for LinkedIn data service" },
          { status: 500 }
        );
      }
      
      if (response.status === 429) {
        return NextResponse.json(
          { error: "Rate limit exceeded. Please try again later." },
          { status: 429 }
        );
      }

      return NextResponse.json(
        { error: "Failed to extract LinkedIn data. Profile may be private or not found." },
        { status: 400 }
      );
    }

    const data = await response.json();

    // Extract relevant information for resume analysis
    const profileData = {
      fullName: data.full_name || "",
      headline: data.headline || "",
      summary: data.summary || "",
      location: data.location || "",
      skills: data.skills || [],
      experience: data.experience?.map((exp: { company?: string; title?: string; description?: string; start_date?: string; end_date?: string }) => ({
        company: exp.company || "",
        title: exp.title || "",
        description: exp.description || "",
        startDate: exp.start_date || "",
        endDate: exp.end_date || "",
      })) || [],
      education: data.education?.map((edu: { school?: string; degree_name?: string; field_of_study?: string; start_date?: string; end_date?: string }) => ({
        school: edu.school || "",
        degree: edu.degree_name || "",
        field: edu.field_of_study || "",
        startDate: edu.start_date || "",
        endDate: edu.end_date || "",
      })) || [],
      // Convert to resume text format
      resumeText: formatAsResumeText(data),
    };

    return NextResponse.json(profileData);
  } catch (error) {
    console.error("LinkedIn extraction error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function formatAsResumeText(data: {
  full_name?: string;
  headline?: string;
  location?: string;
  summary?: string;
  experience?: Array<{
    title?: string;
    company?: string;
    description?: string;
    start_date?: string;
    end_date?: string;
  }>;
  education?: Array<{
    degree_name?: string;
    field_of_study?: string;
    school?: string;
    start_date?: string;
    end_date?: string;
  }>;
  skills?: string[];
}): string {
  let text = "";

  if (data.full_name) {
    text += `${data.full_name}\n`;
  }
  if (data.headline) {
    text += `${data.headline}\n`;
  }
  if (data.location) {
    text += `${data.location}\n\n`;
  }

  if (data.summary) {
    text += `SUMMARY\n${data.summary}\n\n`;
  }

  if (data.experience && data.experience.length > 0) {
    text += "EXPERIENCE\n";
    data.experience.forEach((exp) => {
      text += `${exp.title} at ${exp.company}\n`;
      if (exp.start_date) text += `${exp.start_date} - ${exp.end_date || "Present"}\n`;
      if (exp.description) text += `${exp.description}\n`;
      text += "\n";
    });
  }

  if (data.education && data.education.length > 0) {
    text += "EDUCATION\n";
    data.education.forEach((edu) => {
      text += `${edu.degree_name} in ${edu.field_of_study}\n`;
      text += `${edu.school}\n`;
      if (edu.start_date) text += `${edu.start_date} - ${edu.end_date || "Present"}\n`;
      text += "\n";
    });
  }

  if (data.skills && data.skills.length > 0) {
    text += "SKILLS\n";
    text += data.skills.join(", ") + "\n";
  }

  return text;
}
