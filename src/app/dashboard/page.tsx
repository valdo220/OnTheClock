import styles from "./page.module.css";

export default async function Dashboard() {
  return (
    <div>
      <div className={styles.dashboard}>
        <p className={styles.header}>Dashboard</p>
      </div>
      <div className={styles.dashboardContent}>
        <p className={styles.createAGroup}>Create a group</p>
      </div>
    </div>
  );
}
