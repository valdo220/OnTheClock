import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { getUserFromToken } from "@/utils/auth";

export default async function CreatingGroup() {
  const user = await getUserFromToken();
  if (!user) {
    redirect("/login");
  }
  return (
    <div className="pageWrapper">
      <div className="formWrapper">
        <h1 className="pageTitle">Create a Group</h1>

        <form className="form">
          <label htmlFor="groupName" className="label">
            Group Name
          </label>
          <input
            id="groupName"
            name="groupName"
            type="text"
            className="input"
            required
          />

          <label htmlFor="groupDescription" className="label">
            Group Description
          </label>
          <input
            id="groupDescription"
            name="groupDescription"
            type="text"
            className="input"
            required
          />

          <button type="submit" className="button">
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
}
