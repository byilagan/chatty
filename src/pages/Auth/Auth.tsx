import { Box, Center, Text } from "@chakra-ui/react";
import { LoginForm } from "../../components/Auth/LoginForm";
import { SignUpForm } from "../../components/Auth/SignUpForm";

type AuthProps = {
  isLogin: boolean; 
}

export const Auth = ({ isLogin }: AuthProps) => {
  return (
    <Center height="100vh">
      <Box border="1px solid #808080" padding={6} borderRadius={8} width={400}>
        <Text fontWeight={700} fontSize={24} textAlign="center" mb={2}> Chatty </Text>
        {isLogin ? <LoginForm /> : <SignUpForm/>}
      </Box>
    </Center> 
  ); 
}
