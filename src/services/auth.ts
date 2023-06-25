import { UserLogin, UserSignUp } from "../types/auth";

export const validateSession = () => {
  return fetch(import.meta.env.VITE_AUTH_SERVICE_HOST + "/session", { 
    credentials: "include"
  })
  .then(res => res.json()); 
}

export const login = ({userName, password}: UserLogin) => {
  return fetch(import.meta.env.VITE_AUTH_SERVICE_HOST + "/login", {
    method: "POST", 
    body: JSON.stringify({
      userName, 
      password
    }),
    headers: {
      "Content-Type": "application/json"
    }, 
    credentials: "include"
  })
  .then(res => res.json())
}

export const signUp = (user: UserSignUp) => {
  return fetch(import.meta.env.VITE_AUTH_SERVICE_HOST + "/signup", {
    method: "POST", 
    body: JSON.stringify({user}), 
    headers: {
      "Content-Type": "application/json"
    }, 
    credentials: "include"
  }).then(res => res.json()); 
}

export const signOut = () => {
  return fetch(import.meta.env.VITE_AUTH_SERVICE_HOST + "/signout", {
    method: "DELETE", 
    headers: {
      "Content-Type": "application/json"
    }, 
    credentials: "include"
  }).then(res => res.json()); 
}