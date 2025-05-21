import { NextResponse } from "next/server";
import { User } from "@/app/models/userModel";
import { sequelize } from "@/db";
import { sign } from "jsonwebtoken";

export async function POST(req: Request) {
  await sequelize.sync();

  try {
    const { email, password } = await req.json();

    const user = (await User.findOne({ where: { email } })) as any;

    if (!user) {
      return NextResponse.json({ message: "Email not found" }, { status: 404 });
    }

    const isPasswordValid = await user.validatePassword(password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }

    const token = sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    const res = NextResponse.json({
      message: "Login successful",
      username: user.username,
    });

    res.cookies.set("authToken", token, {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60,
    });

    return res;
  } catch (err) {
    console.error("Login Error:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
