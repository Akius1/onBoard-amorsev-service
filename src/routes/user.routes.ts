import * as express from "express";
import { authentification } from "../middleware/auth.middlewares";
import { UserController } from "../controllers/user.controller";
import { AuthController } from "../controllers/auth.controller";
const Router = express.Router();


Router.get(
  "/profile",
  authentification,
  AuthController.getProfile
);
Router.post("/signup", UserController.signup);
Router.post("/login", AuthController.login);

export { Router as userRouter };