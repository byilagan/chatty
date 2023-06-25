import express from "express"; 
import { loginHandler, sessionHandler, signOutHandler, signUpHandler } from "./user.handlers.js";

const userRoutes = express.Router(); 

userRoutes.get("/session", sessionHandler);

userRoutes.post("/login", loginHandler); 

userRoutes.post("/signup", signUpHandler); 

userRoutes.delete("/signout", signOutHandler); 

export default userRoutes;

