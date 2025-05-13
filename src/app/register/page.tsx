"use client";
import styles from "./page.module.css";
import Form from "next/form";

export default function Register() {
  function handleSubmit(formData: FormData) {
    // formData.preventDefault();
    const name = formData.get("name");
    const emailAddress = formData.get("emailAddress");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");


    if (password !== confirmPassword) {
      alert("Passwords do not match");
      console.log("Passwords do not match");
      return;
    }

    if (!name || !emailAddress || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    } else console.log("Form submitted");
        console.log("Name:", name);
    console.log("EmailAddress:", emailAddress);
    console.log("Password:", password);
    console.log("ConfirmPassword:", confirmPassword);
    for (const entry of formData.entries()) {
        console.log(entry[0], entry[1]);
      }
    // for (const [key, value] of formData.entries()) {
    //     console.log(key, value);
    //   }
  }

  return (
    <div className={styles.register}>
      <p className={styles.header}>Create an account</p>
      <Form action={handleSubmit} className={styles.registerForm}>
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
          <button type="submit" className={styles.createAccountButton}>Create account</button>
        </div>
      </Form>
    </div>
  );
}
