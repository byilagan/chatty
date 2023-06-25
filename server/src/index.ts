import express from "express"; 
import cors from "cors"; 
import dotenv from "dotenv"; 
import session from "express-session"; 

import { userRoutes } from "./api/user/index.js"; 

dotenv.config(); 

const app = express();

if (!process.env.SESSION_SECRET) throw new Error("SESSION_SECRET not defined in env"); 

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "PUT", "GET", "DELETE", "OPTIONS", "HEAD"],
    credentials: true,
  })
);
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false, 
  resave: false,
  name: process.env.SESSION_COOKIE_NAME,
  cookie: { 
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true, 
    secure: false
  }
}))

// Routes
app.use("/api/auth", userRoutes); 

const port = process.env.PORT; 
app.listen(port, () => {
  console.log(`Listening on port ${port}...`); 
})