import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export function middleware(request) {
  console.log(request.url);
  if (cookies().has("isLogin")) {
    return NextResponse.redirect("/dang-nhap");
  }
  //   return NextResponse.redirect(request.url);
}
