"use client";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import styles from "./page.module.css";

export default function Register() {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      password: HTMLInputElement;
      confirmPassword: HTMLInputElement;
    };

    const registerForm = {
      name: formElements.name.value,
      email: formElements.email.value,
      password: formElements.password.value,
      confirmPassword: formElements.confirmPassword.value,
    };

    const { name, email, password, confirmPassword } = registerForm;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerForm),
      });

      let data: any = {};
      const text = await response.text();
      data = text ? JSON.parse(text) : {};

      if (!response.ok) {
        alert(`Account creation failed: ${data.message || "Unknown error"}`);
      } else {
        fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email, password }),
          credentials: "include",
        });
        alert("Account creation successful!");
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Account creation error:", error);
      alert("Something went wrong.");
    }
  }

  return (
    <div className="pageWrapper">
      <div className="formWrapper">
        <h1 className="pageTitle">Create an account</h1>

        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input id="name" name="name" type="text" className="input" required />

          <label htmlFor="email" className="label">
            Email
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

          <label htmlFor="confirmPassword" className="label">
            Confirm password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            className="input"
            required
          />

          <button type="submit" className="button">
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}
