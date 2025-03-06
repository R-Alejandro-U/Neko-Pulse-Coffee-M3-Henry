
import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/appointmens";

export const appointmentRepo = AppDataSource.getRepository(Appointment).extend({
    validateAppointment: function (date: Date, time: string) {

        const [hour, minutes] = time.split(":").map(Number);

        const appointmentDate = new Date(date).setUTCHours(hour, minutes, 0, 0);

        const dateArg = new Date(appointmentDate);
        const dateNowArg = new Date(new Date().getTime() - 3 * 60 * 60 * 1000);

        if (dateArg < dateNowArg) {
            throw new Error("No se puede reservar en una fecha ya pasada (Aun no viajamos en el tiempo)");
        }

        const milliseconds = dateArg.getTime() - dateNowArg.getTime();
        const hours = milliseconds / (60 * 60 * 1000);
        if (hours < 24) {
            throw new Error("No se puede reservar sin 24 horas de antelación");
        }

        const dayOfWeek = dateArg.getUTCDay();
        if (dayOfWeek === 6 || dayOfWeek === 0) {
            throw new Error("No trabajamos los fines de semana");
        }

        if (hour < 10 || (hour === 10 && minutes < 30) || (hour === 18 && minutes > 30) || hour > 18) {
            throw new Error("Trabajamos solamente de 10:30 AM a 6:30 PM");
        }
    },

    validateExistingAppointment: async function (userId: number, date: Date, time: string): Promise<void> {
        const existingAppointment = await this.findOne({
            where: {
                user: { id: userId },
                date,
                time,
            },
        });

        if (existingAppointment) {
            throw new Error(`Ya tienes una reserva para el ${date} a las ${time}. Puedes reservar otro día.`);
        }
    },
});
