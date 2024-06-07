import { Link } from "react-router-dom"
import icon from "../assets/icon.svg"
import mg from "../assets/mg.svg"
import styles from "../styles/Header.module.css"

export default function HeaderDefault() {
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.icon} src={icon} alt="wizard icon" />
            </div>
            <nav className={styles.nav}>
                <Link className="" to={"/index"}>Lançamentos </Link>
                <div>|</div>
                <Link className="" to={"/error"}>Populares </Link>
                <div>|</div>
                <Link className="" to={"/error"}>Gêneros </Link>
                <div>|</div>
                <Link className="" to={"/error"}>Promoções </Link>
                <div>|</div>
                <Link className="" to={"/profile"}>Conta</Link>
            </nav>
            <div className={styles.divSearch}>
                <input className={styles.inputSearch} type="search" />
                <img className={styles.imgSearch} src={mg} alt="magnifying glass" />
            </div>
        </header>
    )
}