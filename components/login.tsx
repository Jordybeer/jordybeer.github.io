import React from "react";
import {
  Flex,
  Button,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { FaLightbulb } from 'react-icons/fa'


export default function Login() {
    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue("red.100", "#red");
return (  
<Flex alignItems="center" justifyContent="center">

  <Button onClick={toggleColorMode} mt={3} variant="outlined">
  <div>
      <FaLightbulb size={24} />
    </div>
  </Button>
</Flex>
)
    }