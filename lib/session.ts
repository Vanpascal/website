import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET_KEY;
if (!secretKey) throw new Error("Missing SESSION_SECRET_KEY");

const encodedKey = new TextEncoder().encode(secretKey);

type SessionPayload = {
  userId: string;
  expiresAt: string;
};

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

  const token = await encrypt({
    userId,
    expiresAt: expiresAt.toISOString(),
  });

  // MUST AWAIT in Next 16 server actions / proxy
  const cookieStore = await cookies();

  cookieStore.set("session", token);
}

export async function refreshSession(userId: string) {
  const expiresAt = new Date(Date.now() + 30 * 60 * 1000);

  const token = await encrypt({
    userId,
    expiresAt: expiresAt.toISOString(),
  });

  const cookieStore = await cookies();

  cookieStore.set("session", token);
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(Math.floor(new Date(payload.expiresAt).getTime() / 1000))
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  if (!session) return null;

  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });

    return payload as SessionPayload;
  } catch (_err) {
    return null;
  }
}
