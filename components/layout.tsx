import React, { ReactNode } from "react";
import { Box , Container} from "@chakra-ui/react";
import Header from "./header";
import Footer from "./footer";
import Home from "../pages/home";
import NewNavbarLeft from "./newnavbarleft";

type LayoutProps = {
  children: ReactNode;

};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <NewNavbarLeft />
      <Container
        minHeight="100vh"
        display="flex"
        bgGradient="linear(to top right, #ffcba4, #2e51bb)"
        color="white"
        borderRight="solid #03435f"
        scrollBehavior="smooth"
        borderRadius="xs"
      >
        <NewNavbarLeft />
      <div>
        <Home />
      </div>
      </Container>
      <Footer />
    </>
  );
};
