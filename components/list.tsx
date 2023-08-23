import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

import React from "react";

const IconList = () => {
  return (
    <List
      pt={10}
      spacing={2}
      maxW={{ base: "100%", sm: "xl" }}
      maxH={{ base: "100%", sm: "xl" }}
      pr={2}
      pl={2}
      color="blue.800"
      pb={10}
      width="100%"
      height="100%"
      position="relative"
      fontSize="110%"
      justifyContent="center"
      alignContent={"center"}
    >
      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        Backend gecombineerd met Next.js
      </ListItem>

      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        Server routing & SSR Compiling{" "}
      </ListItem>

      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        Responsive voor alle apparaten{" "}
      </ListItem>

      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        Frontend met Chakra integratie{" "}
      </ListItem>

      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        100% TypeScript
      </ListItem>

      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        3D model with Three.js
      </ListItem>

      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        Styled with Chakra-ui
      </ListItem>

      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        Dark mode support met toggle
      </ListItem>

      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        User authentication met NextAuth.js
      </ListItem>
    </List>
  );
};

export default IconList;
