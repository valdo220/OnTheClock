"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import styles from "./page.module.css";

export default function Login() {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include"
      });

      if (!res.ok) {
        const { message } = await res.json();
        alert(`Login failed: ${message || "Unknown error"}`);
        return;
      }

      alert("Login successful!");
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong.");
    }
  }

  return (
    <div className="pageWrapper">
      <div className="formWrapper">
        <h1 className="pageTitle">Login</h1>

        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="input"
            required
          />

          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="input"
            required
          />

          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
