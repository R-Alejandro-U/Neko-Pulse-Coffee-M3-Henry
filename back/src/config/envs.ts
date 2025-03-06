import "dotenv/config";

const data = process.env;

//! Configuracion del puerto index main;

export const PORT: number = data.PORT ? parseInt(data.PORT, 10) : 3001;

//! Configuraciones de los mails;

export const EMAIL_USER: string | undefined = data.EMAIL_USER;
export const EMAIL_PASSWORD: string | undefined = data.EMAIL_PASSWORD;

//! Configuraciones de las entradas de la data base;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DB_TYPE: any  = data.DB_TYPE ?? "postgres";
const DB_HOST: string | undefined = data.DB_HOST;
const DB_PORT: number | undefined = data.DB_PORT ? parseInt(data.DB_PORT, 10) : 5432;
const DB_USERNAME: string | undefined = data.DB_USERNAME;
const DB_PASSWORD:string | undefined = data.DB_PASSWORD;
const DB_NAME: string | undefined = data.DB_NAME;
const DB_SYNCHRONIZE: boolean | undefined = data.DB_SYNCHRONIZE ? data.DB_SYNCHRONIZE === "true" : true;
const DB_LOGGING: boolean | undefined = data.DB_LOGGING ? data.DB_LOGGING === "true" : true;
const DB_ENTITIES: string[] | undefined = data.DB_ENTITIES ? data.DB_ENTITIES.split(",") : ["src/entities/**/*.ts"];
const DB_DROPSCHEMA: boolean | undefined = data.DB_DROPSCHEMA ? data.DB_DROPSCHEMA === "true" : false;

export const dbConfig = {
    type: DB_TYPE,
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: DB_SYNCHRONIZE,
    logging: DB_LOGGING,
    entities: DB_ENTITIES,
    dropSchema: DB_DROPSCHEMA,
};

//! configuracion para encriptar contraseñas

export const SALT:number | undefined = parseInt(data.SALT ?? "10", 10); 