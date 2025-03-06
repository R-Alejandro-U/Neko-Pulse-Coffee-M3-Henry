/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./style/LoginStyle.module.css";

export const FormLogin = ({data: {username, password}, funct, submit, errors}) => {

   
    return(
        <div className={styles["login-container"]}>
            <form onSubmit={(event) => submit(event)} className={styles["login-form"]}>

                <div className={styles["logo-container"]}>
                    <img src='src/assets/img/logo-2.jpg' alt="Logo-2" className={styles["logo"]} />
                </div>
                <h1>Iniciar sesión</h1>

                <div className={styles["input-container"]}>
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input type="text" 
                    id="username" 
                    name="username" 
                    value={username} 
                    placeholder="Monkey D. Luffy" 
                    onChange={(event) => funct(event)}
                    autoComplete="username"
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>


                <div className={styles["input-container"]}>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" 
                    id="password" 
                    name="password" 
                    value={password} 
                    placeholder="Carne-de-Sanji" 
                    onChange={(event) => funct(event)}
                    autoComplete="current-password"
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>


                <div className={styles["button-container"]}>
                    <button type="submit">Iniciar sesión</button>
                    <Link to={'/register'}><button type="button">Registrarse</button></Link>
                </div>
                
            </form>
        </div>

    );
}
