import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Fooder from "../components/fooder";
import { Divider, Flex, Text, Box } from "@chakra-ui/react";
import FrontHead from "../components/fronthead";


export default function Home() {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      pt={10}
      maxW="100%" // Simplified maxW
      m={4}
      pb={10}
      width="100%"
      height="100vh" // Set height relative to the viewport
      position="relative"
      fontSize="40%"
    >
      <FrontHead />
    </Flex>
  );
}
