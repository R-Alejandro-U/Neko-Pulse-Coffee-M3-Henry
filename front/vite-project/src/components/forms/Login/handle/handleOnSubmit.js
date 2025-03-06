import Swal from 'sweetalert2'

export const handleOnSubmit = async (event, login, navigate, loginUser) => {
    event.preventDefault();
    try {
        const  data  = await loginUser(login);
        
        Swal.fire({
            title: `Has iniciado sesión. Bienvenida/o ${data.user.name}`,
            width: 600,
            padding: "3em",
            color: "#fff",
            background: `url("https://mir-s3-cdn-cf.behance.net/project_modules/hd/5c9e06114084301.6034c329b0e28.gif") no-repeat center center`,
            
        }).then(() => {
            navigate('/home');
        });
    } catch ( response ) {

        Swal.fire({
            title: `${response.data.message}`,
            width: 600,
            padding: "3em",
            color: "#fff",
            background: `url("https://mir-s3-cdn-cf.behance.net/project_modules/hd/5c9e06114084301.6034c329b0e28.gif") no-repeat center center`,
        });
    }
};
