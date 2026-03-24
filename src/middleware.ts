import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";

  if (hostname.startsWith("studio.")) {
    const url = request.nextUrl.clone();

    // Already rewritten to /studio path — let it through
    if (url.pathname.startsWith("/studio")) {
      return NextResponse.next();
    }

    // Rewrite everything to /studio/...
    url.pathname = `/studio${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
