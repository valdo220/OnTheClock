"use client";
import { FormEvent } from "react";
import styles from "./page.module.css";

export default function Register() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      name: HTMLInputElement;
      emailAddress: HTMLInputElement;
      password: HTMLInputElement;
      confirmPassword: HTMLInputElement;
    };

    const registerForm = {
      name: formElements.name.value,
      emailAddress: formElements.emailAddress.value,
      password: formElements.password.value,
      confirmPassword: formElements.confirmPassword.value,
    };
    const { name, emailAddress, password, confirmPassword } = registerForm;
    console.log(name, emailAddress, password, confirmPassword);

    if (!name || !emailAddress || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      console.log("Passwords do not match");
      return;
    } else {
      console.log("Form submitted");
    }


    fetch("/api/register", {
      
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerForm),
    })
  }
  return (
    <div className={styles.register}>
      <p className={styles.header}>Create an account</p>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <label htmlFor="name" className={styles.name}>
          Name
        </label>
        <input name="name" type="text" className={styles.nameText}></input>
        <label htmlFor="emailAddress" className={styles.emailAddress}>
          Email address
        </label>
        <input
          name="emailAddress"
          type="text"
          className={styles.emailAddressText}
        ></input>
        <label htmlFor="password" className={styles.password}>
          password
        </label>
        <input
          name="password"
          type="password"
          className={styles.passwordText}
        ></input>
        <label htmlFor="confirmPassword" className={styles.confirmPassword}>
          Confirm password
        </label>
        <input
          name="confirmPassword"
          type="password"
          className={styles.confirmPasswordText}
        ></input>
        <div className={styles.createAccountButtonDiv}>
          <button type="submit" className={styles.createAccountButton}>
            Create account
          </button>
        </div>
      </form>
    </div>
  );
}