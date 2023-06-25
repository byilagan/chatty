import { createUser, getUserByUsername } from "./user.js"; 
import { handleError } from "../../utils/index.js"; 
import HttpError from "../HttpError.js";

// Libs
import { Request, Response } from "express"; 
import brcrypt from "bcrypt"; 

export const sessionHandler = async (req: Request, res: Response) => {
  console.log(req.session); 

  if (req.session?.user?.id) {
    res.json(req.session.user);
  } else {
    res.status(401).send({ error: "Session does not exist"});
  }
}

export const loginHandler = async (req: Request, res: Response) => {
  const { userName, password } = req.body;

  console.log(req.body); 

  try {
    if (!req.session) {
      console.log("Session obj not defined"); 
      throw new HttpError(500); 
    }

    if (!userName || !password) throw new HttpError(400, "Missing username or password"); 

    const user = await getUserByUsername(userName); 

    if (!user) throw new HttpError(404, "User does not exist.");

    const {password: p, ...rest} = user; 
    req.session.user = rest; 

    const doesMatch = await brcrypt.compare(password, user.password); 

    if (doesMatch)
      res.send(rest);
    else
      throw new HttpError(401, "Incorrect username or password");
  } catch (e: any) {
    res.status(e.statusCode).send({ error: handleError(e) });
  }
}

export const signUpHandler = async (req: Request, res: Response) => {
  const { user } = req.body;

  try {
    if (!req.session) {
      console.log("Session obj not defined"); 
      throw new HttpError(500); 
    }

    const result = await createUser({
      ...user, 
      password: await brcrypt.hash(user.password, Number(process.env.SALT_ROUNDS || 10))
    }); 

    const { password, ...rest } = result;
    req.session.user = rest;

    res.json(rest); 
  } catch (e: any) {
    res.status(e.statusCode).send({ error: handleError(e) });
  }
}

export const signOutHandler = async (req: Request, res: Response) => {
  req.session?.destroy(err => {
    if (err) {
      res.status(500).send({error: "Logout failed"}); 
    } else {
      res.clearCookie(process.env.SESSION_COOKIE_NAME || ""); 
      res.json("Logout successful"); 
    }
  })
}