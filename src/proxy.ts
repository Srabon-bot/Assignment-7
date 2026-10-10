import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";


export default function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  if (!sessionCookie) {
    const { pathname, search } = request.nextUrl;

    const url = new URL("/signin", request.url);
    url.searchParams.set("reason", "protected");
    url.searchParams.set("redirect", pathname + search);

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/product/:path*", "/profile/:path*"],
};