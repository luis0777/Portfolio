import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // descomentar para ligar o auth

  //   const isAuthenticated = request.cookies.get("auth");

  //   const isLoginPage = request.nextUrl.pathname === "/login";

  //   if (!isAuthenticated && !isLoginPage) {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }

  //   if (isAuthenticated && isLoginPage) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
