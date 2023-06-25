// Libs
import { FormControl, FormLabel, Input, FormErrorMessage, ComponentWithAs, FormControlProps } from "@chakra-ui/react"; 
import { Field, FieldProps} from "formik"; 
import { FC, HTMLInputTypeAttribute } from "react";

type TextInputProps = {
  label: string,
  name: string, 
  type?: HTMLInputTypeAttribute
} & FormControlProps; 

export const TextInput: FC<TextInputProps> = ({ 
  label, 
  name, 
  type = undefined,
  isRequired, 
  ...controlProps
}) => {
  return (
    <Field name={name}>
      {({field, meta: { error, touched } }: FieldProps) => 
        <FormControl {...controlProps} isInvalid={!!error && !!touched}>
          <FormLabel>{`${label} ${isRequired ? "*" : ""}`}</FormLabel>
          <Input {...field} type={type}/>
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
      }
    </Field>
  )
};