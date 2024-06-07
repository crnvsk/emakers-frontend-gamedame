import { Link } from "react-router-dom"
import HeaderDefault from "../components/HeaderDefault";
import styles from "../styles/Index.module.css"
import daysgone from "../img/daysGone.png"
import horizon from "../img/horizon.png"
import gow from "../img/gow.png"
import game1 from "../img/spongeBob.png"
import game2 from "../img/deliverUsMars.png"
import game3 from "../img/spellForce.png"
import game4 from "../img/deathStranding.png"
import game5 from "../img/perish.png"
import carouselArrow from "../img/carouselArrow.png"
import kart from "../assets/kart.svg"

export default function IndexPage() {
    return (
        <div className={styles.divRoot}>
            <HeaderDefault />
            <main className={styles.main}>
                <section className={styles.sectionOne}>
                    <div className={styles.carousel}>
                        <div className={styles.game1}>
                            <img className={styles.carouselImg} src={daysgone} alt="Days Gone" />
                            <div className={styles.gameDesc1}>
                                <div className={styles.divDiscount}>
                                    <p className={styles.discount}>-15%</p>
                                </div>
                                <div className={styles.divPrice1}>
                                    <p className={styles.price1}>R$169,90</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.game2}>
                            <img className={styles.carouselImg} src={horizon} alt="Horizon Zero Dawn" />
                            <div className={styles.gameDesc2}>
                                <div className={styles.divDiscount}>
                                    <p className={styles.discount}>-25%</p>
                                </div>
                                <div className={styles.divPrice1}>
                                    <p className={styles.price1}>R$149,99</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.game3}>
                            <Link to={"/game-gow"}>
                                <img className={styles.carouselImg} src={gow} alt="God of War" />
                            </Link>
                            <div className={styles.gameDesc3}>
                                <div className={styles.divDiscount}>
                                    <p className={styles.discount}>-40%</p>
                                </div>
                                <div className={styles.divPrice1}>
                                    <p className={styles.price1}>R$119,95</p>
                                </div>
                            </div>
                        </div>
                        <nav className={styles.carouselNav}>
                            <button className={styles.firstCarouselButton} ></button>
                            <button className={styles.carouselButton} ></button>
                            <button className={styles.carouselButton} ></button>
                            <button className={styles.carouselButton} ></button>
                        </nav>
                    </div>
                    <div className={styles.arrow}>
                        <img src={carouselArrow} alt="" />
                    </div>
                </section>
                <section className={styles.sectionTwo}>
                    <div className={styles.divTitle}>
                        <h1 className={styles.title}>Lançamentos</h1>
                    </div>
                    <div className={styles.divGames}>
                        <div className={styles.gameCard}>
                            <Link to={"/error"}>
                                <img className={styles.gameImg} src={game1} alt="" />
                            </Link>
                            <div className={styles.divPrice2}>
                                <p className={styles.price2}>R$299,00</p>
                            </div>
                        </div>
                        <div className={styles.gameCard}>
                            <Link to={"/error"}>
                                <img className={styles.gameImg} src={game2} alt="" />
                            </Link>
                            <div className={styles.divPrice2}>
                                <p className={styles.price2}>R$299,00</p>
                            </div>
                        </div>
                        <div className={styles.gameCard}>
                            <Link to={"/error"}>
                                <img className={styles.gameImg} src={game3} alt="" />
                            </Link>
                            <div className={styles.divPrice2}>
                                <p className={styles.price2}>R$299,00</p>
                            </div>
                        </div>
                        <div className={styles.gameCard}>
                            <Link to={"/error"}>
                                <img className={styles.gameImg} src={game4} alt="" />
                            </Link>
                            <div className={styles.divPrice2}>
                                <p className={styles.price2}>R$299,00</p>
                            </div>
                        </div>
                        <div className={styles.gameCard}>
                            <Link to={"/error"}>
                                <img className={styles.gameImg} src={game5} alt="" />
                            </Link>
                            <div className={styles.divPrice2}>
                                <p className={styles.price2}>R$299,00</p>
                            </div>
                        </div>
                        <div className={styles.divKart}>
                            <Link to={"/error"}>
                                <img className={styles.kart} src={kart} alt="" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
