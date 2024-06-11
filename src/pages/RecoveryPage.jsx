import { Link } from "react-router-dom"
import arrow from "../assets/arrow.svg"
import stormWizard from "../img/stormWizard.png"
import styles from "../styles/Forms.module.css"

export default function RecoveryPage() {
    return (
        <div className={styles.divRoot}>
            <form className={styles.registerForm} style={{ display: "flex", gap: "34.2rem" }}>
                <div className={styles.divMain}>
                    <div>
                        <h1 className={styles.title} style={{ textAlign: "center" }}>Recuperar Conta</h1>
                    </div>
                    <div>
                        <input className={styles.input} type="email" placeholder="E-mail" />
                    </div>
                    <div className={styles.divArrow} style={{ width: "75%" }}>
                        <img className={styles.arrow} src={arrow} alt="" />
                    </div>
                </div>
                <div className={styles.divLink} style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                        <Link className={styles.link} to={"/"}>Criar Conta</Link>
                    </div>
                    <div>
                        <Link className={styles.link} to={"/login"}>Fazer Login</Link>
                    </div>
                </div>
            </form>
            <section>
                <img className={styles.img1} src={stormWizard} alt="Storm Wizard image" />
            </section>
        </div>
    )
}