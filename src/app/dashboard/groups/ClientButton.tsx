"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function ClientButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard/groups/creating-group");
  };

  return (
    <button className={styles.createGroupButton} onClick={handleClick}>
      Create your group
    </button>
  );
}
