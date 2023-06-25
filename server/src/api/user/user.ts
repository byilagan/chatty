import prisma from "../../prisma.js"
import HttpError from "../HttpError.js";

type User = {
  id: string;
  email: string; 
  userName: string; 
  password: string; 
  firstName: string;
  lastName: string;
}

export const getUserByUsername = async (userName: string) => {
  try {
    return await prisma.user.findFirst({ where: { userName }});
  } catch (e) {
    console.log("User DB Error: Unable to get user by username")
    throw new HttpError(500);
  }
}

export const createUser = async (user: User) => {
  try {
    return await prisma.user.create({ data: user }); 
  } catch (e: any) {
    console.log("User DB Error: Unable to create user", e);
    throw new HttpError(500);
  }
}

export const deleteUser = async (userId: string) => {
  try {
    return await prisma.user.delete({ where: { id: userId }});
  } catch (e) {
    console.log("User DB Error: Unable to delete user"); 
    throw new HttpError(500);
  }
}
