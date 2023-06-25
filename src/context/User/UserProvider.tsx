// Libs
import { FC, useState} from "react"

// Context
import { UserContext } from "./UserContext"

// Types 
import { User } from "../../types/auth"; 


export const UserProvider: FC<any> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{
      user, 
      setUser 
    }}>
      {children}
    </UserContext.Provider>
  )
}