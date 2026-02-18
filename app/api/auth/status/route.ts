import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("user_id")?.value;
    const userEmail = cookieStore.get("user_email")?.value;

    // Check if user has Gmail connected in database
    let isGmailConnected = false;
    if (userId) {
      const { data: user } = await supabase
        .from("users")
        .select("gmail_refresh_token")
        .eq("id", userId)
        .single();
      
      isGmailConnected = !!user?.gmail_refresh_token;
    }

    return NextResponse.json({
      isAuthenticated: !!userId && isGmailConnected,
      email: userEmail || null,
    });
  } catch {
    return NextResponse.json({
      isAuthenticated: false,
      email: null,
    });
  }
}
