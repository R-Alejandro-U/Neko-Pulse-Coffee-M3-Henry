export const handleOnCancel = async (id, cancelAppointment) => {
    try {
        await cancelAppointment(id);
    } catch (error) {
        console.error(error)
    }
}