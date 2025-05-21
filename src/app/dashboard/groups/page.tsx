import styles from "./page.module.css";
import ClientButton from "./ClientButton";
import { redirect } from "next/navigation";
import { getUserFromToken } from "@/utils/auth";

export default async function GroupsPage() {
  const user = await getUserFromToken();
  if (!user) {
    redirect("/login");
  }
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.topBar}>
        <p className={styles.pageTitle}>Groups</p>
      </div>
      <div className={styles.contentArea}>
        <ClientButton />
      </div>
    </div>
  );
}
