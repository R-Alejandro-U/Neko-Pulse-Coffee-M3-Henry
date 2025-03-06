export const handleInputChangeRegister = (event, setRegister) => {
    const { name, value, type, files } = event.target;

    if (type === "file") {
        setRegister((prevState) => ({
            ...prevState,
            [name]: files[0],
        }));
    } else {
        setRegister((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    console.log(name);
};
