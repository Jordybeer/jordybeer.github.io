// LayoutHome.tsx
import React from "react";
import { Flex } from "@chakra-ui/react";

const LayoutHome = ({ children }) => {
  return (
    <Flex
      position="relative"
      justifyContent={{ base: "center", md: "space-around", xl: "space-between" }}
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      bg="#F7F7F7"
      pb={10}
    >
      {children}
    </Flex>
  );
};

export default LayoutHome;