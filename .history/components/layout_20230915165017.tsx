import React, { ReactNode } from "react";
import { Divider, Container, Flex } from "@chakra-ui/react";
import Fooder from "../components/fooder";
import Home from "../pages/home";
import TopMenu from "../components/topmenu";
import Nuke from "./toast";
import IconList from "./list";
import Header from "./header";
import LeftNav from "./newnavbarleft";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Flex
      flexDirection="column"
      minHeight="100vh"
      bg="linear-gradient(180deg, #2D1E5FD7 0%, #5C2E91DC 100%)"
      color="white"
    >
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
        >
          <Header />
          <LeftNav />

          {/* Dynamic content */}
          {children}
        </Container>
      </Flex>
      <Fooder />
    </Flex>
  );
}
