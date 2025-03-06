// En el servicio de turnos:

import { appointmentDto } from "../dto/appointmentDto";
import { Appointment } from "../entities/appointmens";
import { User } from "../entities/users";
import  Status  from "../interfaces/IAppointment";
import { sendEmail } from "../modules_Email/sendEmail";
import { appointmentRepo } from "../repository/appointment.repo";
import { usersServices } from "./users.service";

export const appointmentsServices = {

    // Implementar una función que pueda retornar el arreglo completo de turnos.

    getSchedules: async (): Promise<Appointment[]> => {
        try {
            return appointmentRepo.find();
        } catch (error) {
            console.error("Hubo un error al obtener los turnos.", error);
            throw error;
        };
    },
        
    // Implementar una función que pueda obtener el detalle de un turno por ID.
    
    getScedulesById: async (id:number): Promise<Appointment> => {
        try {
            const schedule: Appointment | null = await appointmentRepo.findOne({
            where: { id },
            relations: ["user"], 
        });
            if (!schedule) {
                throw new Error(`No existe el turno por id buscado ${id}.`);
            };
            return schedule;
        } catch (error) {
            console.error(`Hubo un error al obtener el turno por id ${id}. Error: ${error}`);
            throw error;
        };
    },

    // Implementar una función que pueda crear un nuevo turno, siempre guardando, además, el ID del usuario que ha creado dicho turno. NO PUEDE HABER UN TURNO SIN ID DE USUARIO. 
    
    createSchedule: async (scheduleData: appointmentDto) => {
        try {
            const user: User | null = await usersServices.getUserByID(scheduleData.userId);

            if (!user) {
                throw new Error("Usuario no encontrado. No se puede crear un turno sin un ID de usuario válido.");
            }

            appointmentRepo.validateAppointment(scheduleData.date, scheduleData.time);
            await appointmentRepo.validateExistingAppointment(scheduleData.userId, scheduleData.date, scheduleData.time)
            const newSchedule: Appointment = appointmentRepo.create({
                date: scheduleData.date, 
                time: scheduleData.time, 
                user: {id: user.id},
            });

            sendEmail({
                to: user.email,
                subject: `¡Hola de nuevo, ya puedes venir a Neko Pulse Coffee a tomar una taza de café virtual! ☕🐾`,
                text: `¡Gracias por reservar tu turno en Manga Café! 🌟 
                
                Estamos emocionados de que hayas elegido nuestro espacio para disfrutar de una experiencia única. Preparamos todo para que tu visita sea divertida y relajante, rodeado de lo mejor del manga y el café. 
                
                Recuerda que tu turno está reservado para el ${newSchedule.date} a las ${newSchedule.time}. 
                
                ¡Te esperamos con los brazos abiertos y una taza de café lista para ti! ☕📚 
                
                Si por alguna razón no puedes asistir, por favor cancela con anticipación para poder ofrecerle tu lugar a otro fanático del manga. Nos vemos pronto en Manga Café, el lugar donde el café y el manga se encuentran. 
                
                ¡Hasta pronto! ✨`,
            });

            return await appointmentRepo.save(newSchedule);

        } catch (error) {
            console.error(`Error al crear el turno: ${error}`);
            throw error;
        }
    },
    

    // Implementar una función que reciba el id de un turno específico y una vez identificado el turno correspondiente, cambiar su estado a “cancelled”.

    cancelSchedule: async (id:number): Promise<Appointment> => {
        try {

            const schedule:Appointment | null = await appointmentsServices.getScedulesById(id);

            console.log(schedule);
            
            
            if (!schedule) {
                throw new Error(`No existe el turno buscado con el id ${id}`);
            };

            schedule.status = Status.Cancelled

            if (!schedule) {
                throw new Error(`No existe el turno buscado con el id ${id}`);
            };  

            sendEmail({
                to: `${schedule.user.email}`,
                subject: `¡Tu turno en Neko Pulse Coffee ha sido cancelado! ☕🐾`,
                text: `¡Hola! 👋  

                Lamentamos que no puedas asistir a tu turno en nuestro Manga Café. 😔  

                Tu reserva para el ${schedule.date} a las ${schedule.time} ha sido cancelada exitosamente.  

                Sabemos que a veces surgen imprevistos, pero no te preocupes: siempre serás bienvenido/a cuando desees visitarnos nuevamente.  

                Cuando estés listo/a para una nueva experiencia rodeado de manga y café, estaremos aquí para ti. Puedes reservar un nuevo turno fácilmente en nuestra página web.  

                ¡Gracias por informarnos con anticipación! Esperamos verte pronto en Neko Pulse Coffee. ☕📚  

                ¡Cuídate mucho y hasta la próxima! ✨`

            });
            
            return await appointmentRepo.save(schedule);
            
        } catch (error) {
            
            console.error(`Hubo un error al obtener el usuario por el id. Error: ${error}`);
            
            throw error;
        };
    },
}
