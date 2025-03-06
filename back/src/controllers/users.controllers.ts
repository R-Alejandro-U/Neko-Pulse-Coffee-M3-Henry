import { Request, Response } from "express";
import { usersServices } from "../services/users.service";
import { User } from "../entities/users";
import { userLoginResDto } from "../dto/userDto";

// GET /users => Obtener el listado de todos los usuarios.

// GET /users/:id => Obtener el detalle de un usuario específico.

// POST /users/register => Registro de un nuevo usuario.

// POST /users/login => Login del usuario a la aplicación.

export const usersControllers = {
    getListUsers: async (req:Request, res:Response) :Promise<void> => {
        try {
            const data:User[] = await usersServices.getUsers(); 
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json(`Hubo un error al obtener los usuarios. Erro: ${error}`);
        };
    },

    getUserById: async (req:Request, res:Response) :Promise<void> => {
        const id: number = parseInt(req.params.id, 10);
        try {
            const user = await usersServices.getUserByID(id);
            if (!user) {
                res.status(404).json({ message: "Usuario no encontrado."});
                return;
            } 
            res.status(200).json(user);
        } catch (error) {
            console.error(`Hubo un error al obtener el usuario por ID: ${error}`);
            res.status(404).json({ message: `Hubo un error al procesar la solicitud. ${error}`});
        };
    },
    
    createUser: async (req:Request, res:Response) :Promise<void> => {
        try {
            const { body } = req;
            const newUser: User = await usersServices.createUser(body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ message: `Error al crear el usuario. ${error}`});
        };
        
    },
    login: async (req:Request, res:Response):Promise<void> => {
        try {
            const { body } = req;
            const login: userLoginResDto = await usersServices.login(body);
            res.status(200).json(login);
        } catch (error) {
            res.status(400).json({ message: `Error al iniciar sesión. ${error}`});
        }
        
    },
}