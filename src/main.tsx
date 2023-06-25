// Libs
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react"
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools"; 

// Context 
import { UserProvider } from './context/User/UserProvider.tsx';

// Components
import App from './App.tsx'

// Styles 
import './index.css'


const queryClient = new QueryClient(); 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <App />
          <ReactQueryDevtools initialIsOpen={false}/>
        </UserProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
