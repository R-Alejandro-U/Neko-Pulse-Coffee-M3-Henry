import { AppDataSource, credenModel, userModel } from "../config/data-source";
import credentialDto from "../dto/credential.Dto";
import { userDto, userLoginResDto } from "../dto/userDto";
import { Credential } from "../entities/credentials";
import { User } from "../entities/users";
import { sendEmail } from "../modules_Email/sendEmail";
import { createCredential, validationCredential } from "./credential.service";

//? En el servicio de usuarios:

export const usersServices = {
    // Implementar una función que pueda retornar el arreglo completo de usuarios.
    getUsers: async (): Promise<User[]> => {
        try {
            return await userModel.find();
        } catch (error) {
            console.error("Hubo un error al obtener los usuarios.");
            throw error;
        };
    },

    // Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.
    getUserByID: async (id:number): Promise<User> => {
        try {
           const userById: User | null = await userModel.findOne({
            where: { id },
            relations: ["appointments"],
            });

           if(!userById) throw new Error(`El Id ${id} no válido o inexistente.`);
            return userById;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            console.error("Hubo un error al obtener el usuario por el id.", errorMessage);
            throw error;
        };
    },

    // Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que al momento de crear el usuario, debe crear su correspondiente par de credenciales llamando a la función correspondiente del servicio de credenciales. 
    
    // Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.
    
    createUser: async (userData:userDto): Promise<User> => {
        try{
            const newUser: User = await AppDataSource.transaction(async (entityManager): Promise<User> => {

                const emailR = await userModel.findOneBy({ email: userData.email });
                const usernameR = await credenModel.findOneBy({ username: userData.username });
                const DniR = await userModel.findOneBy({ nDni: userData.nDni });

                if (emailR) throw new Error("El email ya está en uso.");
                if (usernameR) throw new Error("El nombre de usuario ya está en uso.");
                if (DniR) throw new Error("El número de documento ya está en uso.");

                const credential: Credential = await createCredential(entityManager, {username: userData.username, password: userData.password});


                const newUser: User = entityManager.create(User, {
                    name: userData.name,
                    email: userData.email,
                    birthdate: new Date(userData.birthdate),
                    nDni: userData.nDni,
                    credentials: credential,
                });
    
                const savedUser = await entityManager.save(newUser);

            
                sendEmail({
                    to: savedUser.email,
                    subject: `¡Hola ${userData.username} bienvenid@ a Neko Pulse Coffee ven a tomar una taza de café virtual! ☕🐾`,
                    text: `Aquí, entre los susurros de los gatos y el aroma a café fresco, cada momento es una nueva aventura. 🌸 

                    Gracias por crearte una cuenta y formar parte de nuestra comunidad. Ya sea que vengas en busca de una charla amigable o de una pausa para relajarte, estamos aquí para hacerte sentir como en casa. 

                    Así que siéntate, acomódate y disfruta de la magia que solo este lugar puede ofrecer!. No olvides, ¡todos los días son mejores con un buen café y buena compañía, te esperamos! ☕💫`,
                });

                return savedUser;
            });

            return newUser;
                      
        } catch (error) {
            
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            console.error("Error al crear el usuario:", errorMessage);
            throw errorMessage;
        };
        
    },

    login: async (userData: credentialDto): Promise<userLoginResDto> => {
        try {
            const id: number | undefined = await validationCredential({ username: userData.username, password: userData.password });
    
            if (id === undefined) {
                throw new Error("Credenciales incorrectas.");
            }
    
            const user = await usersServices.getUserByID(id);
    
            return {
                login: true,
                user: {
                    id,
                    name: user.name,
                    email: user.email,
                    birthdate: user.birthdate,
                    nDni: user.nDni
                }
            };
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Error desconocido";
            console.error("Hubo un error al iniciar sesión", errorMessage);
            throw error;
        }
    }
    
}




