import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export function middleware(request) {
  const pathName = request.url;
  if (!cookies(request).has("isLogin") && pathName !== "/dang-nhap") {
    return NextResponse.redirect(new URL("  //   return NextResponse.redirect(request.url);
    ", request.url));
  }
}
export const config = {
  matcher: ["/:path*"],
};
