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
                <Link className="" to={"/#"}>Lançamentos </Link>
                <div>|</div>
                <Link className="" to={"/#"}>Populares </Link>
                <div>|</div>
                <Link className="" to={"/#"}>Gêneros </Link>
                <div>|</div>
                <Link className="" to={"/#"}>Promoções </Link>
                <div>|</div>
                <Link className="" to={"/#"}>Conta</Link>
            </nav>
            <div className={styles.divSearch}>
                <input className={styles.inputSearch} type="search" />
                <img className={styles.imgSearch} src={mg} alt="magnifying glass" />
            </div>
        </header>
    )
}