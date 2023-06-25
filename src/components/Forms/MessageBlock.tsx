import { Box } from "@chakra-ui/react"
import { FC } from "react"


export const MessageBlock: FC<any> = ({ children }) => {
  return (
    <Box borderRadius={4} backgroundColor="red" p={4}>
      {children}
    </Box>
  )
}