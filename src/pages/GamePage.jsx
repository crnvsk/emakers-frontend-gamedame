import styles from "../styles/Game.module.css"
import HeaderDefault from "../components/HeaderDefault";
import gowWide from "../img/gowWide.png"
import blueKart from "../assets/blueKart.svg"
import miniKart from "../assets/miniKart.svg"

export default function GamePage() {
    return (
        <div className={styles.divRoot}>
            <HeaderDefault />
            <main className={styles.main}>
                <section className={styles.mainSection}>
                    <div>
                        <div className={styles.discountValue}>
                            <p>98%</p>
                        </div>
                        <img src={gowWide} alt="God of War Game" />
                        <div className={styles.gameInfo}>
                            <div className={styles.divDiscount}>
                                <p className={styles.discount}>-40%</p>
                            </div>
                            <div className={styles.divPrice}>
                                <p className={styles.price}>R$119,95</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.gameDesc}>
                        <h1 className={styles.title}>God of War</h1>
                        <p className={styles.description}>Com a vingança contra os
                            deuses do Olimpo em um
                            passado distante, Kratos
                            agora vive como um mortal
                            no reino dos deuses e
                            monstros nórdicos. É nesse
                            mundo duro e implacável
                            que ele deve lutar para
                            sobreviver... e ensinar
                            seu filho a fazer o mesmo.</p>
                        <hr className={styles.line} />
                        <div className={styles.divButtons}>
                            <button className={styles.buyButton}>Adicionar ao Carrinho</button>
                            <img className={styles.miniKart1} src={miniKart} alt="" />
                            <button className={styles.refoundButton}>Solicitar Reembolso</button>
                            <img className={styles.miniKart2} src={miniKart} alt="" />
                        </div>
                    </div>
                    <div className={styles.shopKart}>
                        <img src={blueKart} alt="" />
                    </div>
                </section>
            </main>
        </div>
    )
}