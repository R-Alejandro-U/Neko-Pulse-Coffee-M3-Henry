import { Request, Response } from "express"
import { appointmentsServices } from "../services/appointments.service";
import { Appointment } from "../entities/appointmens";

export const appointmentsControllers = {
    getListSchedule: async (req:Request, res:Response): Promise<void> => {
        try {
            const data: Appointment[] = await appointmentsServices.getSchedules(); 
            res.status(200).json(data);
        } catch (error) {
            res.status(404).json(`Hubo un error al obtener los turnos. Erro: ${error}`);
        }
    },

    getScheduleById: async (req:Request, res:Response): Promise<void> => {
        const id: number = parseInt(req.params.id, 10);
        try {

            const schedule: Appointment = await appointmentsServices.getScedulesById(id);

            if (!schedule) {
                res.status(404).json({ message: "Turno no encontrado." });
                return;
            }

            res.status(200).json(schedule);

        } catch (error) {
            console.error("Hubo un error al obtener el turno por ID:", error);
            res.status(404).json({ message: "Hubo un error al procesar la solicitud.", error });

        };
    },
    
    scheduleShift: async (req:Request, res:Response): Promise<void> => {
        try {
            const { body } = req;
            console.log(body);
            
            const newUser:Appointment = await appointmentsServices.createSchedule(body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: `Error al crear el turno. Error: ${error}`});
        };
    },
    
    scheduleCancel: async (req:Request, res:Response): Promise<void> => {
        const id: number = parseInt(req.params.id, 10);
        try {

            const schedule: Appointment = await appointmentsServices.cancelSchedule(id);
            
            if (!schedule) {
                throw new Error("Turno no cancelado.");
            };

            res.status(200).json(schedule);

        } catch (error) {
            console.error("Hubo un error al cancelar el turno por ID:", error);
            res.status(404).json({ message: "Hubo un error al procesar la solicitud." });
        };
    },
}