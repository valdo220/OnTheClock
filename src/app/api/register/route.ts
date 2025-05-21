import { User } from "@/app/models/userModel";
import { sequelize } from "@/db";
import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";

export async function POST(req: Request) {
  await sequelize.sync();

  const { name, email, password } = await req.json();

  const user = await User.create({
    username: name,
    email: email,
    password: password,
  });
  console.log("User created:", user);
  return Response.json({
    message: "User created",
    username: user.get("username"),
  });
}
