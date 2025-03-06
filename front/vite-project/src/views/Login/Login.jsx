import { useContext, useEffect, useState } from "react"
import { FormLogin } from "../../components/forms/Login/LoginForm";
import { handleInputChange } from "../../components/forms/Login/handle/handleInputChange";
import { handleOnSubmit } from "../../components/forms/Login/handle/handleOnSubmit";
import { validate } from "../../components/forms/Login/utils/validate";
import { useNavigate } from "react-router-dom";
import { usersContex } from "../../Contex/UsersContex";


export const Login = () => {

    const { loginUser } = useContext(usersContex)

    const [login, SetLogin] = useState({
        username: ``,
        password: ``,
    });
    const [errors, setErrors] = useState({
        username: ``,
        password: ``
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        handleInputChange(e, SetLogin);
    };
    useEffect(()=>{
        setErrors(validate(login));
    }, [login]); 
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!login.username.length){
            setErrors({username: "Se requiere el nombre de usuario."})
            return
        } else if(!login.password.length){
            setErrors({password: "Se requiere la contraseña."})
            return
        };  
        if(Object.keys(errors).length) {
            return alert("por favor completa los campos, como es pedido");
        }
        await handleOnSubmit(e, login, navigate, loginUser);
    };
    return(
        <FormLogin data={login} funct={handleChange} submit={handleSubmit} errors={errors}/>
    );
}