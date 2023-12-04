import React from "react";
import { Container, Flex } from "@chakra-ui/react";
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
      color="white"
      zIndex={2}
      position="relative"
      bgImage="url('/svg/prism.svg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <TopMenu />


        <Container
          maxW="100%"
          maxH="calc(100vh - 10vh)"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRight="solid #03435f"
          borderRadius="xs"
          overflow="hidden"
          position="relative"
        >
          {children}
        </Container>


      <Flex
        flexGrow={1}
        alignItems="center"
        justifyContent="center"
        mx="auto"
        my="auto"
      ></Flex>

      <Fooder
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          zIndex: 1000,
        }}
      />
    </Flex>
  );
};

export default Layout;
