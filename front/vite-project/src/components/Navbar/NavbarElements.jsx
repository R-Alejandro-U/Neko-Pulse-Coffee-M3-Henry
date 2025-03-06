/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import styles from "./style/NavbarStyle.module.css"

export const NavbarElements = ({logOut}) => {
    return(
        <header className={styles["navbar"]}>
            <div className={styles["logo-container"]}>
                <img src="src/assets/img/neko_logo.jpg" alt="Logo" className={styles["logo"]} />
            </div>

            <nav className={styles["nav-links"]}>
                <Link to={'/home'} className={styles["link"]}>Inicio</Link>
                <Link to={'/my-appointments'} className={styles["link"]}>Reservaciones</Link>
                <Link to={'/reservation'} className={styles["link"]}>Haz tú reserva</Link>
            </nav>

            <div className={styles["profile-container"]}>
                <button onClick={() => logOut()} className={styles["link"]}>
                    Cerrar sesión
                </button>
            </div>
    </header>
    )
}