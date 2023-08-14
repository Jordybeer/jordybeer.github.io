import React, { ReactNode } from "react";
import { Box , Container} from "@chakra-ui/react";
import Header from "./header";
import Fooder from "../components/fooder";
import Home from "../pages/home";
import { NewNavbarLeft } from './newnavbarleft';

type LayoutProps = {
  children: ReactNode;

};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
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
  <NewNavbarLeft />
  <Home />
</Container>
      <Fooder />
    </>
  );
};

