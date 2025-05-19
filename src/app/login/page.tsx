"use client";
import styles from "./page.module.css";
import Form from "next/form";

export default function Login() {
  function handleSubmit(formData: FormData) {
    // formData.preventDefault();
    const emailAddress = formData.get("emailAddress");
    const password = formData.get("password");

    if (!emailAddress || !password) {
      alert("Please fill in all fields");
      return;
    } else console.log("Form submitted");
    for (const entry of formData.entries()) {
      console.log(entry[0], entry[1]);
    }
  }
  return (
    <div className={styles.login}>
      <p className={styles.header}>login</p>
      <Form action={handleSubmit} className={styles.loginForm}>
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
          type="text"
          className={styles.passwordText}
        ></input>
        <div className={styles.loginButtonDiv}>
          <button className={styles.loginButton}>Login</button>
        </div>
      </Form>
    </div>
  );
}
