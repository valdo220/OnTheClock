import styles from "./page.module.css";
import { redirect } from "next/navigation";
import ClientButton from "./ClientButton";
import { getUserFromToken } from "@/utils/auth";

export default async function Dashboard() {
  const user = await getUserFromToken()

  if (!user) {
    redirect("/login")
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.topBar}>
        <p className={styles.pageTitle}>Dashboard</p>
        <p className={styles.welcome}>Welcome, {user.username}!</p>
      </div>
      <div className={styles.contentArea}>
        <ClientButton />
      </div>
    </div>
  );
}
