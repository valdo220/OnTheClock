import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.welcome}>Welcome to On The Clock</h1>

      <div className={styles.description}>
        <p>
          OnTheClock is a web-based application that allows employers to invite
          their employees to a shared platform where team members can clock in
          and clock out with a click. It helps businesses track employee work
          hours accurately, streamlining attendance management, time reporting,
          and shift accountability.
        </p>
      </div>

      <div className={styles.buttonContainer}>
        <Link href="/register" className={styles.button}>
          Create User
        </Link>
        <Link href="/login" className={styles.button}>
          Login
        </Link>
      </div>
    </div>
  );
}
