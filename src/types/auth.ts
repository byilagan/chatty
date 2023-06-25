export type User = {
  id: string;
  createdAt: string;
  email: string; 
  userName: string;
  firstName: string;
  lastName: string; 
} 

export type UserSignUp = {
  email: string; 
  userName: string; 
  password: string; 
  firstName: string;
  lastName: string;
}

export type UserLogin = Pick<UserSignUp, "userName" | "password">