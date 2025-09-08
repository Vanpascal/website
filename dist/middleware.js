"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = middleware;
const server_1 = require("next/server");
const session_1 = require("@/lib/session");
const protectedRoutes = ["/admin"];
const publicRoutes = ["/login"];
async function middleware(req) {
    var _a;
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route));
    const isPublicRoute = publicRoutes.includes(path);
    const sessionCookie = (_a = req.cookies.get("session")) === null || _a === void 0 ? void 0 : _a.value;
    const session = sessionCookie ? await (0, session_1.decrypt)(sessionCookie) : null;
    if (session && session.userId) {
        // Refresh session if user is active
        await (0, session_1.refreshSession)(session.userId);
    }
    if (isProtectedRoute && !(session === null || session === void 0 ? void 0 : session.userId)) {
        return server_1.NextResponse.redirect(new URL("/login", req.nextUrl));
    }
    if (isPublicRoute && (session === null || session === void 0 ? void 0 : session.userId)) {
        return server_1.NextResponse.redirect(new URL("/admin", req.nextUrl));
    }
    return server_1.NextResponse.next();
}
exports.config = {
    matcher: ["/admin/:path*", "/dashboard"],
};
