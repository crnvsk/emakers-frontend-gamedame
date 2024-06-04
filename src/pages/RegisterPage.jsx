import { Link } from "react-router-dom"
import seta from "../assets/seta.svg"
import stormWizard from "../img/image1.png"
import styles from "../styles/RegisterPage.module.css"

export default function RegisterPage(){
    return(
        <div className={styles.divRoot}>
            <form className={styles.registerForm}>
                <div className={styles.divMain}>
                    <div>
                        <h1 className={styles.title}>Registrar</h1>
                    </div>
                    <div>
                        <input className={styles.input} type="text" placeholder="Nome de Usuário"/>
                    </div>
                    <div>
                        <input className={styles.input} type="email" placeholder="E-mail"/>
                    </div>
                    <div>
                        <input className={styles.input} minLength={11} maxLength={11} type="number" placeholder="CPF"/>
                    </div>
                    <div>
                        <input className={styles.input} type="password" placeholder="Senha"/>
                    </div>
                    <div>
                        <input className={styles.input} type="password" placeholder="Confirmar Senha"/>
                    </div>
                    <div className={styles.divArrow}>
                        <img className={styles.arrow} src={seta} alt="" />
                    </div>
                </div>
                <div className={styles.divLink}>
                    <Link target="blank" className={styles.link} to={"/login"}>Fazer Login</Link>
                </div>
            </form>
            <section>
                <img className={styles.img1} src={stormWizard} alt="Storm Wizard image"/>
            </section>
        </div>
    )
}