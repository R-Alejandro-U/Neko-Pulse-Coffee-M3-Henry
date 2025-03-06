import isOver16 from "./isOver16";

export const validate = ({ name, birthdate, nDni, email, username, password }) => {
    const errors = {};

    const names = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const birthdates = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    const emails = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const usernames = /^[a-zA-Z0-9._-]{3,40}$/;
    // eslint-disable-next-line no-useless-escape
    const passwords = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#\$%\^&\*\(\)_\+\-=\[\]\{\};:'",<>\./?\\|`~]{8,}$/;

;

    if (name && name.length) {
        if (!names.test(name) || name.length < 2) {
            errors.name = `El nombre es inválido "${name}". Debe tener al menos dos caracteres.`;
        }
    }

    const is16 = isOver16(birthdate);
    if (birthdate) {
        if (!birthdates.test(birthdate)) {
            errors.birthdate = `La fecha de nacimiento es inválida.`;
        } else if (!is16) {
            errors.birthdate = `Debes tener al menos 16 años.`;
        }
    }

    if (nDni && nDni.length) {
        if (nDni.length !== 8 || isNaN(nDni)) {
            errors.nDni = `El número de DNI debe tener 8 caracteres y ser numérico.`;
        }
    }

    if (email && email.length) {
        if (!emails.test(email)) {
            errors.email = `El email no es válido.`;
        }
    }

    if (username && username.length) {
        if (!usernames.test(username)) {
            errors.username = `El nombre de usuario es inválido "${username}".`;
        }
    }

    if (password && password.length) {
        if (!passwords.test(password)) {
            errors.password = `La contraseña es inválida. Debe contener al menos 8 caracteres, una mayúscula, un número. (un carácter especial es opcional)`;
        }
    }

    return errors;
};
