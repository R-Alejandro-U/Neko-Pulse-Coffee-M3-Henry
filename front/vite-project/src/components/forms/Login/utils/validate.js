export const validate = (input) => {
    const errors = {};
    const usernameRegex = /^[a-zA-Z0-9._-]{3,40}$/;

    if (input.username.length !== 0) {
        if (!usernameRegex.test(input.username)) {
            errors.username = `El nombre de usuario es inválido "${input.username}". Debe tener entre 3 y 40 caracteres. letras, números, ".", "_" y "-".`;
        };
    };
    
    if(input.password.length !== 0){
        if(input.password.length < 8){
            errors.password = `La contraseña es inválida. Debe tener al menos 8 digitos.`;
        };
    };

    return errors;
};
