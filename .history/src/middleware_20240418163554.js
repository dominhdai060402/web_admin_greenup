import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export function middleware(request) {
  console.log(request.url);
  if (!cookies().has("isLogin")) {
    return NextResponse.redirect(new URL("/dang-nhap", request.url));
  }
  //   return NextResponse.redirect(request.url);
}
export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
