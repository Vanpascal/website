import { NextRequest, NextResponse } from "next/server";
import { decrypt, refreshSession } from "@/lib/session";

const protectedRoutes = ["/admin"];
const publicRoutes = ["/login"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some((route) =>
    path.startsWith(route)
  );
  const isPublicRoute = publicRoutes.includes(path);

  const sessionCookie = req.cookies.get("session")?.value;
  const session = sessionCookie ? await decrypt(sessionCookie) : null;

  if (session && session.userId) {
    // Refresh session if user is active
    await refreshSession(session.userId as string);
  }

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isPublicRoute && session?.userId) {
    return NextResponse.redirect(new URL("/admin", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard"],
};
