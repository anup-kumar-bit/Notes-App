import { NextResponse } from "next/server";

export function middleware(request:any) {
  // if (request.nextUrl.pathname == "/") {
  //   return NextResponse.redirect(new URL("/register", request.url));
  // }
  return NextResponse.next();
}
