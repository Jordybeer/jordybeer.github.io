import React from "react";
import { Container } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import TopMenu from "../components/topmenu";
import LeftNav from "./newnavbarleft";
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
      zIndex={99}
      position="relative"
      bgImage="url('/svg/prism.svg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <LeftNav />
      <TopMenu />
      <Flex flexGrow={1} alignItems="center" justifyContent="center">
        <Container
          maxW="100%"
          height="100%"
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
      </Flex>
      <Fooder
        style={{ position: "fixed", bottom: 0, width: "100%", zIndex: 1000 }}
      />
    </Flex>
  );
};

export default Layout;
