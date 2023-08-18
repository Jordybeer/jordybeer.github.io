import React from "react";
import { Divider, Container } from "@chakra-ui/react";
import Header from "../components/header";
import Fooder from "../components/fooder";
import Home from "../pages/home";
import LeftNav from "../components/leftnav3";

import Nuke from "./toast";
import IconList from "./list";

export default function Layout(): JSX.Element {
  return (
    <>
    <LeftNav />
      <Container
        maxW="100%"
        minH="100vh"
      display="flex"
        justifyContent="center"
        alignItems="center"
        bgGradient="linear(to top right, #ffcba4, #2e51bb)"
        color="white"
        borderRight="solid #03435f"
      scrollBehavior="smooth"
      borderRadius="xs"
    >
        <Home />
      </Container>
      {/* hier kan footer content */}
      <Fooder />
    </>
  );
};

export default Layout;
