import Swal from "sweetalert2";

export const handleOnSubmit = async (event, register, navigate, registerUser) => {
    
    event.preventDefault();
    try {
        const data = await registerUser(register);
        Swal.fire({
            title: `Te has registrado con exitos. ${data.name}`,
            width: 600,
            padding: "3em",
            color: "#fff",
            background: `url("https://mir-s3-cdn-cf.behance.net/project_modules/hd/5c9e06114084301.6034c329b0e28.gif") no-repeat center center`,
            
        }).then(() => {
            navigate('/login');
        });
    } catch ({response}) {

        console.log(response);

        Swal.fire({
            title: `Ocurrio un error al registrase. ${response.data.message}`,
            width: 600,
            padding: "3em",
            color: "#fff",
            background: `url("https://mir-s3-cdn-cf.behance.net/project_modules/hd/5c9e06114084301.6034c329b0e28.gif") no-repeat center center`,
            
        })
    };
};