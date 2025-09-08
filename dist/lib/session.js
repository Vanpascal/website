"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSession = createSession;
exports.refreshSession = refreshSession;
exports.deleteSession = deleteSession;
exports.encrypt = encrypt;
exports.decrypt = decrypt;
const jose_1 = require("jose");
const headers_1 = require("next/headers");
const secretKey = process.env.SESSION_SECRET_KEY;
if (!secretKey) {
    throw new Error("SESSION_SECRET_KEY environment variable is not set.");
}
const encodedKey = new TextEncoder().encode(secretKey);
async function createSession(userId) {
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
    const session = await encrypt({ userId, expiresAt });
    const cookieStore = await (0, headers_1.cookies)();
    cookieStore.set("session", session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
    });
}
async function refreshSession(userId) {
    const expiresAt = new Date(Date.now() + 30 * 60 * 1000);
    const session = await encrypt({ userId, expiresAt });
    const cookieStore = await (0, headers_1.cookies)();
    cookieStore.set("refreshToken", session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
    });
}
async function deleteSession() {
    const cookieStore = await (0, headers_1.cookies)();
    cookieStore.delete("session");
}
async function encrypt(payload) {
    return new jose_1.SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(Math.floor(payload.expiresAt.getTime() / 1000))
        .sign(encodedKey);
}
async function decrypt(session = "") {
    try {
        const { payload } = await (0, jose_1.jwtVerify)(session, encodedKey, {
            algorithms: ["HS256"],
        });
        return payload;
    }
    catch (error) {
        console.error("Failed to verify session", error);
        return null;
    }
}
