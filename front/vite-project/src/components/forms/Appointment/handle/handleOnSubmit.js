import Swal from "sweetalert2";

export const handleOnChangeA = async (event, appointment, createAppointment, user, navigate) => {
    event.preventDefault();
    try {
        const newAppointment = {
            ...appointment,
            userId: user,
        }
        await createAppointment(newAppointment);
        Swal.fire({
            title: `Reservaste con exito.`,
            width: 600,
            padding: "3em",
            color: "#fff",
            background: `url("https://mir-s3-cdn-cf.behance.net/project_modules/hd/5c9e06114084301.6034c329b0e28.gif") no-repeat center center`,
        })
        navigate("/my-appointments")
    } catch ( response ) {

        Swal.fire({
            title: `${response.data.message}`,
            width: 600,
            padding: "3em",
            color: "#fff",
            background: `url("https://mir-s3-cdn-cf.behance.net/project_modules/hd/5c9e06114084301.6034c329b0e28.gif") no-repeat center center`,
        });
    }
}