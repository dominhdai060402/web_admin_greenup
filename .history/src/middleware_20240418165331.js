import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export function middleware(request) {
  const pathName = new URL(request.url).pathname;
  if (!cookies(request).has("isLogin") && pathName !== "/dang-nhap") {
    return NextResponse.redirect(new URL("/dang-nhap", request.url));
  }
}
export const config = {
  matcher: ["/:path*"],
};
