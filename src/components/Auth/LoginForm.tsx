// Libs
import { Button } from "@chakra-ui/react"; 
import { Formik, Form} from "formik";
import * as Yup from "yup"; 
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { useState, useContext} from "react";

// Hooks
import { UserLogin } from "../../types/auth";

// Services
import { login } from "../../services/auth";

// Components 
import { MessageBlock } from "../Forms/MessageBlock";
import { TextInput } from "../Forms/TextInput";

// Context 
import { UserContext } from "../../context/User/UserContext";

 
export const LoginForm = () => {
  const [formError, setFormError] = useState<string>(""); 
  const navigate = useNavigate(); 
  const { setUser } = useContext(UserContext); 
  const { mutate } = useMutation(login, { 
    onSuccess: (data: any) => {
      data?.error && setFormError(data.error); 
      setUser?.(data); 
      navigate("/"); 
    }
  }); 

  const initial: UserLogin = {
    userName: "", 
    password: ""
  }

  const validate = Yup.object().shape({
    userName: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
  })

  return (
    <Formik 
      initialValues={initial} 
      onSubmit={(values: UserLogin, { validateForm }) => {
        validateForm(values); 
        mutate(values); 
      }} 
      validationSchema={validate} 
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Form style={{display: "flex", flexDirection: "column"}}>
        {formError?.length != 0 && <MessageBlock> {formError} </MessageBlock>}
        <TextInput name="userName" label="Username" mt={4}/>
        <TextInput name="password" label="Password" type="password" mt={4}/>
        <Button type="submit" mt={4}>
          Login
        </Button>
      </Form>
    </Formik>
  )
}