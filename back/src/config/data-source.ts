import { DataSource } from "typeorm";
import { dbConfig } from "./envs";
import { User } from "../entities/users";
import { Credential } from "../entities/credentials";

export const AppDataSource: DataSource = new DataSource({
    type: dbConfig.type,
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    synchronize: dbConfig.synchronize,
    logging: dbConfig.logging,
    dropSchema: dbConfig.dropSchema,
    entities: dbConfig.entities,
});

export const userModel = AppDataSource.getRepository(User);
export const credenModel =  AppDataSource.getRepository(Credential);