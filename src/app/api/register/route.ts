import { User } from "@/app/models/userModel";
import { sequelize } from "@/db";

export async function GET() {
  console.log("GET request received");
  const data = { message: "Hello from the API route!" };
  return Response.json({ data });
}
export async function POST(req: Request) {
  
  await sequelize.sync()
  const { name, emailAddress, password } = await req.json();
  const data = { message: "created user" };

    const user = await User.create({
        username: name,
        email: emailAddress,
        password: password
    });
    const { username, email } = user.get()
    console.log("User created:", user);
  return Response.json({
    message: "User created",
    username: user.get("username"),
  });
}