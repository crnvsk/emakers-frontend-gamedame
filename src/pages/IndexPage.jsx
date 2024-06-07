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
import { useState } from "react"

export default function IndexPage() {
    const [button1, setHighLight1] = useState(true)
    const [button2, setHighLight2] = useState(false)
    const [button3, setHighLight3] = useState(false)
    const [button4, setHighLight4] = useState(false)

    const handleOnClick1 = () => {
        setHighLight1(true)
        setHighLight2(false)
        setHighLight3(false)
        setHighLight4(false)
    }
    const handleOnClick2 = () => {
        setHighLight1(false)
        setHighLight2(true)
        setHighLight3(false)
        setHighLight4(false)
    }
    const handleOnClick3 = () => {
        setHighLight1(false)
        setHighLight2(false)
        setHighLight3(true)
        setHighLight4(false)
    }
    const handleOnClick4 = () => {
        setHighLight1(false)
        setHighLight2(false)
        setHighLight3(false)
        setHighLight4(true)
    }

    return (
        <div className={styles.divRoot}>
            <HeaderDefault />
            <main className={styles.main}>
                <section className={styles.sectionOne}>
                    <div className={styles.carousel}>
                        <div className={styles.game1}>
                            <Link to={"/error"}>
                                <img className={styles.carouselImg} src={daysgone} alt="Days Gone" />
                            </Link>
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
                            <Link to={"/error"}>
                                <img className={styles.carouselImg} src={horizon} alt="Horizon Zero Dawn" />
                            </Link>
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
                            <button className={styles.firstCarouselButton} id="1" style={button1 === false ? { backgroundColor: "#97A4A2" } : { backgroundColor: "#FCFAFA" }} onClick={handleOnClick1}></button>
                            <button className={styles.carouselButton} id="2" style={button2 === false ? { backgroundColor: "#97A4A2" } : { backgroundColor: "#FCFAFA" }} onClick={handleOnClick2}></button>
                            <button className={styles.carouselButton} id="3" style={button3 === false ? { backgroundColor: "#97A4A2" } : { backgroundColor: "#FCFAFA" }} onClick={handleOnClick3}></button>
                            <button className={styles.carouselButton} id="4" style={button4 === false ? { backgroundColor: "#97A4A2" } : { backgroundColor: "#FCFAFA" }} onClick={handleOnClick4}></button>
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
