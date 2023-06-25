// Libs
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"; 
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";

// Styles
import './App.css'

// Pages
import { Home } from "./pages/Home/Home";
import { Auth } from './pages/Auth/Auth';
import { Chat } from "./pages/Chat/Chat";
import { Logout } from "./pages/Logout/Logout";

// Components
import { Protected } from "./components/Routes/Protected";

// Context
import { UserContext } from "./context/User/UserContext";

// Services
import { validateSession } from "./services/auth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Auth isLogin/>}/>
      <Route path="/signup" element={<Auth isLogin={false}/>}/> 
      <Route path="/logout" element={<Logout />} />
      <Route element={<Protected/>}>
        <Route path="/" element={<Home />}/>
        <Route path="/chat" element={<Chat/>}/>
      </Route>
    </>
  )
); 

function App() {
  const { setUser, user } = useContext(UserContext);  
  const { data, status } = useQuery("session", validateSession, { enabled: !user, cacheTime: 1}); 

  useEffect(() => {
    if (status === "success" && data?.id) {
      setUser?.(data); 
    }
  }, [ data, status, setUser ])

  if ((status === "loading" || !user) && !data?.error) return <p>Loading...</p>; 

  return <RouterProvider router={router}/>; 
}

export default App
