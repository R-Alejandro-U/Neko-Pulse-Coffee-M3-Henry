import { useContext, useEffect, useState } from "react";
import { ElementsForm } from "../../components/forms/Appointment/ElementsForm";
import { handleInputChangeA } from "../../components/forms/Appointment/handle/handleInputChange";
import { handleOnChangeA } from "../../components/forms/Appointment/handle/handleOnSubmit";
import { validateInput } from "../../components/forms/Appointment/utils/validate";
import { usersContex } from "../../Contex/UsersContex";
import { useNavigate } from "react-router-dom";


export const AppointmentForm = () =>{

    const {createAppointment, user} = useContext(usersContex)
    const navigate = useNavigate();
    const [appointment, setAppointment] = useState({
        date: "",
        time: "",
    });

    const [errors, setErrors] = useState({
        date: "",
        time: "",
    })

    const handleChange = (e) => {
        handleInputChangeA(e, setAppointment)
    };

    useEffect(() => {
        setErrors(validateInput(appointment));
    }, [appointment])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!appointment.date.length) {
            setErrors({date: "el campo de la fecha es requerido"})
            return;
        }
        if (!appointment.time.length) {
            setErrors({time: "el campo de la hora es requerido"})
            return;
        }
        if(Object.keys(errors).length) {
            return alert("por favor completa los campos, como es pedido");
        }

        handleOnChangeA(e, appointment, createAppointment, user, navigate)
    }

    return(
        <ElementsForm data={appointment} funct={handleChange} errors={errors} submit={handleSubmit}/>
    )
}