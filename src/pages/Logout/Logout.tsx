// Libs 
import { useMutation } from "react-query"; 
import { useEffect } from "react";

// Services
import { signOut } from "../../services/auth";

export const Logout = () => {
  const { mutate: logout } = useMutation(signOut, { 
    onSuccess: (data: any) => {
      console.log(data); 
    }
  }); 

  useEffect(() => {
    logout(); 
  }, [ logout ])
  
  return (
    <div>
      <h1>Logout Successful</h1>
    </div>
  )
}