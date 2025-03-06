import { useContext, useEffect, useState } from "react";
import AppointmentSchedule from "../../components/Appointment/AppointmentSchedule";
import { usersContex } from "../../Contex/UsersContex";

export const MyAppointment = () => {

    const {cancelAppointment} = useContext(usersContex);
    const { getAppointment, user, appointments} = useContext(usersContex);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            getAppointment(user)
            .finally(() => setLoading(false));
    }, [user, getAppointment]);
    
    return (
        <main style={{height: "100vh", scrollBehavior: "smooth", padding: "4em"}}>
            {loading ? (<p>Cargando citas...</p>) : appointments.length > 0 ? ( 
                appointments.map((schedule) => (
                    <AppointmentSchedule key={schedule.id} schedules={schedule} cancelAppointment={cancelAppointment}/>
                ))
            ) : (
                <p>No hay turnos disponibles</p>
            )}
        </main>
    );
};
