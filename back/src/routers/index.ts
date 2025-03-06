import { Router } from "express";
import routerAppointments from "./appointments.routers";
import routerUsers from "./users.routers"
const routes:Router = Router();

routes.use("/users", routerUsers)
routes.use("/appointments", routerAppointments)

export default routes;