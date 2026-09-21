import { Router } from "express";
import auth from "../middlewares/auth.middleware";
import { registerUserController } from "../controllers/user.controller";

export const adminRouter = Router()

adminRouter.post("/register", registerUserController)