import { User } from "@/app/models/userModel";
import { sequelize } from "@/db";

export async function POST(req: Request) {
  
  await sequelize.sync()
  const { name, emailAddress, password } = await req.json();

    const user = await User.create({
        username: name,
        email: emailAddress,
        password: password
    });
    console.log("User created:", user);
  return Response.json({
    message: "User created",
    username: user.get("username"),
  });
}