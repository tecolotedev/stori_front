import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;

  const { pathname } = request.nextUrl;

  if (pathname == "/" || pathname == "/login") {
    if (token) return NextResponse.redirect(new URL("/app", request.url));
  }

  if (pathname.startsWith("/app") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
