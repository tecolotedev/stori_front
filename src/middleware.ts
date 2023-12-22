import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;

  if (request.nextUrl.pathname.startsWith("/app") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
