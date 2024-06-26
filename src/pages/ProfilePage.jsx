import { Link } from "react-router-dom"
import trashcan from "../assets/trash.svg"
import pencil from "../assets/pencil.svg"
import cart from "../assets/cart.svg"
import game1 from "../img/spongeBob.png"
import game2 from "../img/deliverUsMars.png"
import game3 from "../img/godOfWar.png"
import game4 from "../img/deathStranding.png"
import styles from "../styles/Profile.module.css"
import HeaderDefault from "../components/HeaderDefault"

export default function ProfilePage() {
    return (
        <div className={styles.divRoot}>
            <HeaderDefault />
            <main className={styles.main}>
                <section className={styles.sectionOne}>
                    <h1 className={styles.title1}>Olá,{" <<Nome do Usuário>>"} </h1>
                    <p className={styles.paragraphs}>Seu email é nomeusuario@email.com</p>
                    <p className={styles.paragraphs}>Seu CPF é 123.456.789-00</p>
                    <div className={styles.masterButtons}>
                        <div className={styles.divButtonOne}>
                            <button className={styles.buttonOne}>Alterar Dados</button>
                            <img className={styles.imgButton} src={pencil} alt="pencil" />
                        </div>
                        <div className={styles.divButtonOne}>
                            <button className={styles.buttonOne}>Excluir Conta</button>
                            <img className={styles.imgButton} src={trashcan} alt="trash" />
                        </div>
                        <div className={styles.divButtonTwo}>
                            <button className={styles.buttonTwo}>Tela do admin</button>
                        </div>
                    </div>
                </section>
                <section className={styles.sectionTwo}>
                    <div className={styles.divTitle}>
                        <h3 className={styles.title3}>Jogos adquiridos:</h3>
                    </div>
                    <div className={styles.divGames}>
                        <div className={styles.gameCard}>
                            <img src={game1} alt="" />
                            <p className={styles.desc}>100/100</p>
                        </div>
                        <div className={styles.gameCard}>
                            <img src={game2} alt="" />
                            <p className={styles.desc}>95/100</p>
                        </div>
                        <div className={styles.gameCard}>
                            <img src={game3} alt="" />
                            <p className={styles.desc}>75/100</p>
                        </div>
                        <div className={styles.gameCard}>
                            <img src={game4} alt="" />
                            <p className={styles.desc}>Adicionar avaliação</p>
                        </div>
                    </div>
                    <div className={styles.divCart}>
                        <Link to={"/checkout"}>
                            <img className={styles.imgcart} src={cart} alt="shopping cart" />
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    )
}