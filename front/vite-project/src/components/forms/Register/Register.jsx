/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./style/RegisterStyle.module.css";

export const RegisterForm = ({data: {name, birthdate, nDni, email, username, password}, funct, submit, error}) => {
  return (
    <div className={styles["register-container"]}>
        <form onSubmit={(event)=> submit(event)} className={styles["register-form"]}>
            <div className={styles["logo-container"]}>
                <img src="src/assets/img/Neko_logo.jpg" alt="Neko_logo" className={styles["logo"]} />
            </div>

            <h2>Registro</h2>

            <div className={styles["input-columns"]}>
                <div className={styles["input-column"]}>
                    <label htmlFor="name">Nombre:</label>
                    <input 
                        type="text"
                        id="name" 
                        name="name" 
                        placeholder="Kono Dio Da!" 
                        value={name}
                        onChange={(event) => funct(event)}
                        autoComplete="name"
                    />
                    {error.name && <p>{error.name}</p>}

                    <label htmlFor="birthdate">Fecha de nacimiento:</label>
                    <input 
                        type="date"
                        id="birthdate"
                        name="birthdate" 
                        placeholder="1868-ZA WAREDUUUUUU!"
                        value={birthdate}
                        onChange={(event) => funct(event)}
                        autoComplete="bday"
                    />
                    {error.birthdate && <p>{error.birthdate}</p>}

                    <label htmlFor="nDni">DNI o Documento:</label>
                    <input 
                        type="number"
                        id="nDni" 
                        name="nDni" 
                        placeholder="一 二 三 四 五 六 七 八"
                        value={nDni}
                        onChange={(event) => funct(event)}
                        autoComplete="off"
                    />
                    {error.nDni && <p>{error.nDni}</p>}
                </div>

                <div className={styles["input-column"]}>
                    <label htmlFor="email">Correo electrónico:</label>
                    <input
                        type="email"
                        id="email" 
                        name="email"
                        placeholder="I.hate.the.Joestars.DioBrandon@gmail.com"
                        value={email}
                        onChange={(event) => funct(event)}
                        autoComplete="email"
                    />
                    {error.email && <p>{error.email}</p>}

                    <label htmlFor="username">Nombre de usuario:</label>
                    <input 
                        type="text"
                        id="username" 
                        name="username" 
                        placeholder="Dio" 
                        value={username}
                        onChange={(event) => funct(event)}
                        autoComplete="username"
                    />
                    {error.username && <p>{error.username}</p>}

                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="The_World_Is_the_strongest_stand"
                        value={password}
                        onChange={(event) => funct(event)}
                        autoComplete="new-password"
                    />
                    {error.password && <p>{error.password}</p>}
                </div>
            </div>

            <div className={styles["button-container"]}>
                <button type="submit" className={styles["register-button"]}>Registrarse</button>
                <Link to={'/login'}><button type="button" className={styles["login-button"]}>Iniciar sesión</button></Link>
            </div>
        </form>
    </div>
  );
};

