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

    // Proxycurl API has been sunset and is no longer available
    // NinjaPear (the replacement) requires different parameters (work email, not LinkedIn URL)
    // So we can't auto-fetch LinkedIn profiles anymore
    return NextResponse.json(
      { 
        error: "LinkedIn auto-import discontinued",
        message: "The LinkedIn data extraction service (Proxycurl) has been sunset. Please use the 'Paste Text' option to copy and paste your LinkedIn profile content directly.",
        alternative: "Copy your LinkedIn 'About' section and experience details, then paste them in the text area."
      },
      { status: 503 }
    );
  } catch (error) {
    console.error("LinkedIn extraction error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
