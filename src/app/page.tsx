import styles from "./page.module.css";
import clsx from "clsx";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.home}>
      <div>
        <p className={styles.welcome}>Welcome to On The Clock</p>
      </div>
      <div className={styles.discription}>
        <p>
          OnTheClock is a web-based application that allows employers to invite
          their employees to a shared platform where team members can clock in
          and clock out with a click. It helps businesses track employee work
          hours accurately, streamlining attendance management, time reporting,
          and shift accountability.
        </p>
      </div>
      <div className={styles.loginDiv}>
        <button className={clsx(styles.loginDiv, styles.createUserButton)}>
          <Link href="/register">Create user</Link>
        </button>
        <button className={clsx(styles.loginDiv, styles.loginButton)}>
          <Link href="/login">Login</Link>
        </button>
      </div>
    </div>
  );
}
