import { Link } from "react-router-dom"
import arrow from "../assets/arrow.svg"
import stormWizard from "../img/image1.png"
import styles from "../styles/Forms.module.css"

export default function LoginPage() {
    return (
        <div className={styles.divRoot}>
            <form className={styles.registerForm} style={{ display: "flex", gap: "30rem" }}>
                <div className={styles.divMain}>
                    <div>
                        <h1 className={styles.title}>Login</h1>
                    </div>
                    <div>
                        <input className={styles.input} type="email" placeholder="E-mail" />
                    </div>
                    <div>
                        <input className={styles.input} type="password" placeholder="Senha" />
                    </div>
                    <div className={styles.divArrow}>
                        <Link to={"/profile"}>
                            <img className={styles.arrow} src={arrow} alt="" />
                        </Link>
                    </div>
                </div>
                <div className={styles.divLink} style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                        <Link className={styles.link} to={"/"}>Criar Conta</Link>
                    </div>
                    <div>
                        <Link className={styles.link} to={"/recovery"}>Esqueceu a Senha?</Link>
                    </div>
                </div>
            </form>
            <section>
                <img className={styles.img1} src={stormWizard} alt="Storm Wizard image" />
            </section>
        </div>
    )
}