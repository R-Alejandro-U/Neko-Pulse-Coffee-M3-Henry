const isValidTime = (time) => {
    const [hour, minute] = time.split(":").map(Number);
  
    return ((hour < 10) || (hour === 10 && minute < 30) || (hour === 18 && minute > 30) ||(hour > 18))
}

export const validateInput = (input) => {
    const errors = {};
  
    const { date, time } = input;
  
    const selectedDateTime = new Date(`${date}T${time}`);
    const now = new Date();
  
    const twentyFourHoursLater = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  
    if (date.length) {
      if (isNaN(selectedDateTime.getTime())) {
        errors.date = "La fecha seleccionada no es válida";
      } 
      
      if (selectedDateTime < now) {
        errors.date = "No puedes agendar citas para fechas pasadas";
      } 
      
      if (selectedDateTime < twentyFourHoursLater) {
        errors.date = "Debes seleccionar una fecha con por lo menos 24 horas de antelación";
      } 
      
      if ([0, 6].includes(selectedDateTime.getDay())) {
        errors.date = "No se pueden agendar citas los fines de semana";
      }
    }

    if (time.length) {
      if (isValidTime(time)) {
        errors.time = "La hora debe estar entre las 10:30 AM y las 6:30 PM";
      }
    }
  return errors;
};
  