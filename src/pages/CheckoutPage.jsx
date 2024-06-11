import HeaderDefault from "../components/HeaderDefault";
import spongeBob from "../img/spongeBob.png"
import deathStranding from "../img/deathStranding.png"
import miniCart from "../assets/whiteMiniCart.svg"
import pix from "../assets/pix.svg"
import styles from "../styles/Checkout.module.css"

export default function CheckoutPage() {
    return (
        <div>
            <HeaderDefault />
            <main className={styles.main}>
                <section className={styles.sectionOne}>
                    <h1 className={styles.title1}>Carrinho de Compras</h1>
                    <div className={styles.divGame}>
                        <div className={styles.divDesc}>
                            <p className={styles.name1}>Sponge Bob: Battle for BikiniBottom</p>
                            <p className={styles.platform}>Plataforma: PC</p>
                            <p className={styles.price1}>R$299,00</p>
                        </div>
                        <img src={spongeBob} alt="sponge bob game" />
                    </div>
                    <div className={styles.divGame}>
                        <div className={styles.divDesc}>
                            <p className={styles.name2}>Death Stranding</p>
                            <p className={styles.platform}>Plataforma: PC</p>
                            <p className={styles.price2}>R$299,00</p>
                        </div>
                        <img src={deathStranding} alt="death stranding game" />
                    </div>
                    <div className={styles.divLine}>
                        <hr className={styles.line} />
                    </div>
                    <div className={styles.divTotal}>
                        <p className={styles.totalPrice}>R$598,00</p>
                        <p className={styles.totalPrice}>Total</p>
                    </div>
                </section>
                <section className={styles.sectionTwo}>
                    <h1 className={styles.title2}>Método de Pagamento</h1>
                    <div className={styles.divPix}>
                        <img src={pix} alt="pix logo" />
                        <p className={styles.pix}>Pix</p>
                        <span className={styles.checkbox}></span>
                    </div>
                    <div className={styles.divLine}>
                        <hr className={styles.line2} />
                    </div>
                    <div className={styles.termsCheckbox}>
                        <span className={styles.checkbox}></span>
                        <p className={styles.terms}>Eu aceito os termos e condições</p>
                    </div>
                    <div className={styles.divBuy}>
                        <button className={styles.buyButton}>Finalizar Compra</button>
                        <img className={styles.miniCart} src={miniCart} alt="shopping cart" />
                    </div>
                </section>
            </main>
        </div>
    )
}