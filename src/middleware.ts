import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";

  // If accessing via studio.coreyowens.com, rewrite to /studio
  if (hostname.startsWith("studio.")) {
    const url = request.nextUrl.clone();
    // If they're already on a /studio path, let it through
    if (url.pathname.startsWith("/studio")) {
      return NextResponse.next();
    }
    // Rewrite root and all other paths to /studio
    url.pathname = `/studio${url.pathname === "/" ? "" : url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
