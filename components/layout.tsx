import React from "react";
import { Container, Flex, Box } from "@chakra-ui/react";
import TopMenu from "../components/topmenu";
import Fooder from "../components/fooder";

interface LayoutProps {
  children: any;
  pages: any;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      minHeight="100vh"
      width= "100vw"
      color="white"
      zIndex={2}
      position="relative"
      bgImage="url('/svg/prism.svg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      justifyContent="center"
    >
      <Container
        maxW="100%"
        maxH="100%"
        display="flex"
        flexDirection="column" // Add this property
        justifyContent="space-between" // Adjust this property
        alignItems="center"
        borderRight="solid #03435f"
        borderRadius="xs"
        overflow="visible"
        position="relative"
      >
        <TopMenu />
        {children}


        </Container>
        <Fooder
          style={{
            position: "absolute",
            overflow: "auto",
            width: "100%",
            zIndex: 1,
          }}
        />

    </Flex>
  );
};

export default Layout;
