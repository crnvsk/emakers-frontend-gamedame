import HeaderDefault from "../components/HeaderDefault";
import styles from "../styles/Admin.module.css"

export default function AdminPage() {
    return (
        <div>
            <HeaderDefault />
            <main className={styles.main}>
                <section className={styles.sectionOne}>
                    <h1 className={styles.titleOne}>Cadastrar Jogo</h1>
                    <div className={styles.divInputs}>
                        <input className={styles.input} type="text" placeholder="Título do jogo" />
                        <input className={styles.input} type="text" placeholder="Gênero" />
                        <input className={styles.inputTwo} type="text" placeholder="Descrição" />
                        <input className={styles.inputThree} type="text" placeholder="Inserir imagem" />
                    </div>
                    <div className={styles.divButton}>
                        <button className={styles.button}>Cadastrar</button>
                    </div>
                </section>
                <section className={styles.sectionTwo}>
                    <h1 className={styles.titleTwo}>Remover Jogo</h1>
                    <div className={styles.divInputsTwo}>
                        <input className={styles.inputFour} type="text" placeholder="Título do jogo ou ID"/>
                    </div>
                    <div className={styles.divButtonTwo}>
                            <button className={styles.buttonTwo}>Remover</button>
                    </div>
                </section>
                <section className={styles.sectionOne}>
                    <h1 className={styles.titleOne}>Editar Jogo</h1>
                    <div className={styles.divInputs}>
                        <input className={styles.input} type="text" placeholder="Título do jogo" />
                        <input className={styles.input} type="text" placeholder="Gênero" />
                        <input className={styles.inputTwo} type="text" placeholder="Descrição" />
                        <input className={styles.inputThree} type="text" placeholder="Inserir imagem" />
                    </div>
                    <div className={styles.divButton}>
                        <button className={styles.button}>Modificar</button>
                    </div>
                </section>
            </main>
        </div>
    )
}