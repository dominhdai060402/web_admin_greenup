import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export function middleware(request) {
  const pathName = request.url;
  if (!cookies().has("isLogin") && pathName !== "/dang-nhap") {
    return NextResponse.redirect(new URL("/dang-nhap", request.url));
  }
  //   return NextResponse.redirect(request.url);
}
export const config = {
  matcher: ["/:path*"],
};
