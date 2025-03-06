import  { NextFunction, Request, Response, Router }  from "express";
import { appointmentsControllers } from "../controllers/appointments.controllers";
import { validation } from "../midddlewares/validateData";
const router: Router = Router();

router.get("/", (req:Request, res:Response) => appointmentsControllers.getListSchedule(req, res));

router.get("/:id", (req:Request, res:Response, next: NextFunction) => validation.dateParams(req, res, next), (req:Request, res:Response) => appointmentsControllers.getScheduleById(req, res));

router.post("/schedule", (req:Request, res:Response, next: NextFunction) => validation.dateBody(req, res, next), (req:Request, res:Response) => appointmentsControllers.scheduleShift(req, res));

router.put("/cancel/:id", (req:Request, res:Response, next: NextFunction) => validation.dateParams(req, res, next) , (req:Request, res:Response) => appointmentsControllers.scheduleCancel(req, res));

export default router; 
