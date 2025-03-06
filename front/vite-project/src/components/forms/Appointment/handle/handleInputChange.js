export const handleInputChangeA = (event, SetAppointment) => {
    const {name, value} = event.target;
    SetAppointment((prevState) => ({
        ...prevState,
        [name]: value,
    }));
};