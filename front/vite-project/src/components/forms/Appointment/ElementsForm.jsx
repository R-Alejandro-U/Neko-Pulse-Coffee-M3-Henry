/* eslint-disable react/prop-types */
import styles from "./style/ElementsForm.module.css";

export const ElementsForm = ({ data: { date, time }, funct, errors, submit }) => {
    return (
        <div className={styles.formContainer}>
            <form onSubmit={(e) => submit(e)} className={styles.form}>

                <div className={styles.logoContainer}>
                    <img src="src/assets/img/logo-2.jpg" alt="Logo-2" className={styles.logo} />
                </div>

                <h1 className={styles.title}>Reserva</h1>

                <div className={styles.inputGroup}>
                    <label htmlFor="date" className={styles.label}>Fecha:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={date}
                        placeholder="15-02-2005"
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(event) => funct(event)}
                        autoComplete="date"
                        className={styles.input}
                    />
                    {errors.date && <p >{errors.date}</p>}
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="time" className={styles.label}>Hora:</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={time}
                        placeholder="Carne-de-Sanji"
                        onChange={(event) => funct(event)}
                        autoComplete="time"
                        className={styles.input}
                    />
                    {errors.time && <p >{errors.time}</p>}
                </div>

                <div className={styles.buttonContainer}>
                    <button type="submit" className={styles.button}>Reservar</button>
                </div>

            </form>
        </div>
    );
};
