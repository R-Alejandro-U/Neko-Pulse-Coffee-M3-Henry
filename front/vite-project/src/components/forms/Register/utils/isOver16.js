function isOver16(fechaNacimiento) {
    // Convertir fecha de nacimiento a Date
    const fechaNac = new Date(fechaNacimiento);
    if (isNaN(fechaNac)) return false; // Validar que la fecha sea válida

    // Obtener la fecha actual
    const hoy = new Date();

    // Calcular los años cumplidos
    const edad = hoy.getFullYear() - fechaNac.getFullYear();

    // Ajustar el cálculo si el cumpleaños aún no ha pasado este año
    const mes = hoy.getMonth() - fechaNac.getMonth();
    const dia = hoy.getDate() - fechaNac.getDate();

    if (mes < 0 || (mes === 0 && dia < 0)) {
        return edad - 1 >= 16;
    }

    return edad >= 16;
}

export default isOver16;
