export const handleInputChange = (event, SetLogin) => {
    const {name, value} = event.target;
    SetLogin((prevState) => ({
        ...prevState,
        [name]: value,
    }));
};