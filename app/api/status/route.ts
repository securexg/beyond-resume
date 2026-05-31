import { NextResponse } from "next/server";

export async function GET() {
  const deepseekKey = process.env.DEEPSEEK_API_KEY;
  const proxycurlKey = process.env.PROXYCURL_API_KEY;
  
  const status = {
    deepseek: {
      configured: !!deepseekKey,
      status: deepseekKey ? "connected" : "not_configured",
      message: deepseekKey ? "API key is set" : "DEEPSEEK_API_KEY environment variable is missing",
    },
    proxycurl: {
      configured: !!proxycurlKey,
      status: proxycurlKey ? "connected" : "not_configured", 
      message: proxycurlKey ? "API key is set" : "PROXYCURL_API_KEY environment variable is missing",
    },
    timestamp: new Date().toISOString(),
  };
  
  return NextResponse.json(status);
}
