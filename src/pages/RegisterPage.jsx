import { Link } from "react-router-dom"
import arrow from "../assets/arrow.svg"
import stormWizard from "../img/stormWizard.png"
import styles from "../styles/Forms.module.css"
import { useState } from "react"

export default function RegisterPage() {
    const [show, setShow] = useState("password")
    const handleFocus = () => {
        setShow("text")
    }
    const handleBlur = () => {
        setShow("password")
    }
    return (
        <div className={styles.divRoot}>
            <form className={styles.registerForm}>
                <div className={styles.divMain}>
                    <div>
                        <h1 className={styles.title}>Registrar</h1>
                    </div>
                    <div>
                        <input className={styles.input} type="text" placeholder="Nome de Usuário" />
                    </div>
                    <div>
                        <input className={styles.input} type="email" placeholder="E-mail" />
                    </div>
                    <div>
                        <input className={styles.input} minLength={11} maxLength={11} type="number" placeholder="CPF" />
                    </div>
                    <div>
                        <input className={styles.input} type={show} placeholder="Senha" onBlur={handleBlur} onFocus={handleFocus} />
                    </div>
                    <div>
                        <input className={styles.input} type={show} placeholder="Confirmar Senha" onBlur={handleBlur} onFocus={handleFocus} />
                    </div>
                    <div className={styles.divArrow}>
                        <Link to={"/profile"}>
                            <img className={styles.arrow} src={arrow} alt="" />
                        </Link>
                    </div>
                </div>
                <div className={styles.divLink}>
                    <Link className={styles.link} to={"/login"}>Fazer Login</Link>
                </div>
            </form>
            <section>
                <img className={styles.img1} src={stormWizard} alt="Storm Wizard image" />
            </section>
        </div>
    )
}