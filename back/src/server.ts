import express from "express";
import morgan from 'morgan'
import routes from "./routers";
import cors from "cors"
const server = express();

server.use(cors())
server.use(morgan("dev"));
server.use(express.json());
server.use(routes);

export default server;