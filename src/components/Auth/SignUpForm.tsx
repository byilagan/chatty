// Libs 
import { FormControl, Input, Button, FormLabel, FormErrorMessage } from "@chakra-ui/react"
import { Formik, Form } from "formik"; 
import { useMutation } from "react-query";
import * as Yup from "yup"; 

// Services 
import { signUp } from "../../services/auth";

// Types
import { UserSignUp } from "../../types/auth";

// Components
import { TextInput } from "../Forms/TextInput";

export const SignUpForm = () => {
  const { mutate } = useMutation(signUp, {
    onSuccess: (data) => {
      console.log(data); 
    }
  })

  const validation = Yup.object().shape({
    userName: Yup.string().required("Username is required"), 
    password: Yup.string().required("Password is required"),
    firstName: Yup.string().required("First Name is required"), 
    lastName: Yup.string().required("Last Name is required"), 
    email: Yup.string().required().email("Email is required")
  })

  return (
    <Formik<UserSignUp>
      initialValues={{
        userName: "", 
        password: "",
        firstName: "", 
        lastName: "", 
        email: ""
      }}
      onSubmit={(values, { validateForm }) => {
        validateForm(values); 
        mutate(values)
      }}
      validationSchema={validation}
    >
      <Form style={{display: "flex", flexDirection: "column"}}>
        <TextInput name="firstName" label="First Name" isRequired/>
        <TextInput name="lastName" label="Last Name" isRequired mt={4}/>
        <TextInput name="email" label="Email" isRequired mt={4}/>
        <TextInput name="userName" label="Username" isRequired mt={4}/>
        <TextInput name="password" label="Password" type="password" isRequired mt={4}/>
        <Button type="submit" mt={4}>
          Sign Up
        </Button>
      </Form>
    </Formik>
  )
}