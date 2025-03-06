// En el servicio de credenciales:
import { EntityManager } from "typeorm";
import { credenModel, userModel } from "../config/data-source";
import credentialDto from "../dto/credential.Dto";
import { Credential } from "../entities/credentials";
import  bcrypt  from "bcrypt";
import { SALT } from "../config/envs";
import { User } from "../entities/users";

const hashPassword = async (password: string): Promise<string> => {
    try {
        if (typeof SALT !== 'number' || isNaN(SALT)) {
            throw new Error("El valor de SALT no es válido. Asegúrate de configurarlo correctamente.");
        }
        const salt: string = await bcrypt.genSalt(SALT);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Hubo un error desconocido."
        console.error("Hubo un problema en la incriptación:", errorMessage);
        throw error;
    };
};


export const createCredential = async (entityManager: EntityManager ,data:credentialDto): Promise<Credential> => {
    try {
        const encrypted: string = await hashPassword(data.password);

        const credential: Credential = entityManager.create(Credential, {
            username: data.username,
            password: encrypted,
        });

        return await entityManager.save(credential);

    } catch (error) {
        console.error(`Error al crear las credenciales: ${error}`);
        throw  error;
    };
};

export const validationCredential = async (credential:credentialDto): Promise<number | undefined> => {

    try {
        const validation: Credential | null = await credenModel.findOneBy({username: credential.username});

        if (!validation || !(await bcrypt.compare(credential.password, validation.password))) {
            throw new Error("No existe el usuario o la contraseña es incorrecta.");
        };

        const userid: User | null = await userModel.findOneBy({credentials: {id: validation.id}});

        return userid?.id;

            
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Error desconocido."
        console.error("Error al validar las credenciales:", errorMessage);
        throw  error;
    }
    
};
