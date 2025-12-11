import { type NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";

export default async function proxy(req: NextRequest) {
  const url = req.nextUrl;
  const path = url.pathname;

  const cookieStore = await req.cookies; // ⚠ async in proxy.ts
  const sessionCookie = cookieStore.get("session")?.value ?? null;

  const session = sessionCookie ? await decrypt(sessionCookie) : null;
  const isAuthenticated = Boolean(session?.userId);

  const isProtected = path.startsWith("/admin");
  const isLogin = path === "/login";

  // Redirect if not authenticated
  if (isProtected && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", url));
  }

  // Redirect logged-in users away from login page
  if (isLogin && isAuthenticated) {
    return NextResponse.redirect(new URL("/admin", url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
