import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

export async function getUserFromToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value;

  if (!token) return null;

  try {
    const decoded = verify(token, process.env.JWT_SECRET!);
    return decoded as { userId: string; username: string };
  } catch {
    return null;
  }
}
