/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import styles from "./style/AppointmentStyle.module.css";
import { usersContex } from "../../Contex/UsersContex";

const AppointmentSchedule = ({ schedules: { date, time, status, id}}) => {
  const [appointmentStatus, setAppointmentStatus] = useState(status);

  const { cancelAppointment } = useContext(usersContex);

  const handleCancel = async () => {
    try {
      await cancelAppointment(id);
      setAppointmentStatus("Cancelled");
    } catch (error) {
      console.error("Hubo un error al cancelar el turno:", error);
    }
  };

  return (
    <div className={styles.appointmentCard}>
      <h3 className={styles.date}>{date}</h3>
      <p className={styles.time}>{time}</p>
      <p className={`${styles.status} ${appointmentStatus === "Active" ? styles.confirmed : styles.pending}`}>
        {appointmentStatus}
      </p>
      <button
        className={styles.cancelButton}
        onClick={handleCancel}
        disabled={appointmentStatus === "Cancelled"}
      >
        Cancelar turno
      </button>
    </div>
  );
};

export default AppointmentSchedule;
