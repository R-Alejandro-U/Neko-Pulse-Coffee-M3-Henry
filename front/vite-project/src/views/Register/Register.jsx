import { useContext, useEffect, useState } from "react";
import { RegisterForm } from "../../components/forms/Register/Register";
import { handleInputChangeRegister } from "../../components/forms/Register/handle/handleInputChangeRegister";
import { handleOnSubmit } from "../../components/forms/Register/handle/handleOnSubmit";
import { validate } from "../../components/forms/Register/utils/validate";
import { useNavigate } from "react-router-dom";
import { usersContex } from "../../Contex/UsersContex";

export const Register = () => {

    const {registerUser} = useContext(usersContex);

    const [register, SetRegister] = useState({
        name: ``, 
        birthdate: ``, 
        nDni: ``, 
        email: ``, 
        username: ``, 
        password: ``, 
    });

    const [errors, setErrors] = useState({
        name: ``, 
        birthdate: ``, 
        nDni: ``, 
        email: ``, 
        username: ``, 
        password: ``, 
    })

    const navigate = useNavigate();

    useEffect(() => {
        setErrors(validate(register));
    }, [register])

    const handleChange = (e) => {
        handleInputChangeRegister(e, SetRegister);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(!register.name.length){
            setErrors({name: "Se requiere el nombre."})
            return
        } else if(!register.birthdate.length){
            setErrors({birthdate: "Se requiere la fecha de nacimiento."})
            return
        } else if(!register.nDni.length){
            setErrors({nDni: "Se requiere el documento por favor."})
            return
        } else if(!register.email.length){
            setErrors({email: "Se requiere la direccion de correo electronico por favor."})
            return
        } else if(!register.username.length){
            setErrors({username: "Se requiere el nombre de usuario por favor."})
            return
        } else if(!register.password.length){
            setErrors({password: "Se requiere la contraseña por favor."})
            return
        }
        if(Object.keys(errors).length) {
            return alert("por favor completa los campos, como es pedido");
        }
        handleOnSubmit(e, register, navigate, registerUser);
    };

    console.log(errors);
    

    return(
        <RegisterForm data={register} funct={handleChange} submit={handleSubmit} error={errors}/>
    );
}