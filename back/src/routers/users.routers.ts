import  { NextFunction, Request, Response, Router }  from "express";
import { usersControllers } from "../controllers/users.controllers";
import { validation } from "../midddlewares/validateData";
const router: Router = Router();

router.get("/", (req:Request, res:Response) => usersControllers.getListUsers(req, res));

router.get("/:id", (req:Request, res:Response, next: NextFunction) => validation.dateParams(req, res, next), (req:Request, res:Response) => usersControllers.getUserById(req, res));

router.post("/register", (req:Request, res:Response, next: NextFunction) => validation.dateBody(req, res, next), (req:Request, res:Response) => usersControllers.createUser(req, res));

router.post("/login", (req:Request, res:Response, next: NextFunction) => validation.dateBody(req, res, next), (req:Request, res:Response) => usersControllers.login(req, res));

export default router;