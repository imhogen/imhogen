import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/")) {
    // console.log("request", req.nextUrl.pathname);
    console.log("mw run");
  }

  return NextResponse.next();
}
