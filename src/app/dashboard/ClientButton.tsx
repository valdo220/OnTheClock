"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function ClientButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard/groups");
  };

  return (
    <button className={styles.viewGroupButton} onClick={handleClick}>
      View your groups
    </button>
  );
}
