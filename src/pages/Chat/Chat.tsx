import { Box } from "@chakra-ui/react"; 

type Member = {
  id: string; 
  userName: string;
}

type Message = {
  id: string; 
  chatId: string;
  timeStamp: string;
  content: string;
}

type Chat = {
  name: string; 
  members: Member[];
  messages: Message[];
}

export const Chat = () => {
  return (
    <Box>Welcome</Box>
  ); 
}