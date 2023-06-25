import { createContext } from "react";
import { User } from "../../types/auth";

type UserContextType = {
  user: User | null; 
  setUser: React.Dispatch<React.SetStateAction<User | null>> | null;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: null
}); 

