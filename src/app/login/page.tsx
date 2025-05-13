import styles from "./page.module.css";

export default function Register() {
    return (
        <div className={styles.login}>
            <p className={styles.header}>login</p>
            <form className={styles.loginForm}>
                <label htmlFor="emailAddress" className={styles.emailAddress}>Email address</label>
                <input name="emailAddress" type="text" className={styles.emailAddressText}></input>
                <label htmlFor="password" className={styles.password}>password</label>
                <input name="password" type="text" className={styles.passwordText}></input>
                <div className={styles.loginButtonDiv}>
                <button className={styles.loginButton}>Login</button>
                </div>
            </form>
        </div>
    )
};