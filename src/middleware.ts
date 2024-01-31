import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/api";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;

  const { pathname } = request.nextUrl;

  if (pathname == "/" || pathname == "/login") {
    if (token) return NextResponse.redirect(new URL("/app", request.url));
  }

  if (pathname.startsWith("/app")) {
    console.log("mid token: ", token);

    if (!token) return NextResponse.redirect(new URL("/login", request.url));
    const { ok } = await verifyToken();
    const response = NextResponse.redirect(new URL("/login", request.url));
    console.log("mid ok: ", ok);

    if (!ok) {
      response.headers.set("Set-Cookie", "access_token=");

      return response;
    }
  }
}
