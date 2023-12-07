import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Fooder from "../components/fooder";
import { Divider, Flex, Text, Box } from "@chakra-ui/react";
import FrontHead from "../components/fronthead";


export default function Home() {
  return (
    <Flex
      direction="column"
      justify="space-between" // Adjust this property
      align="center"
      pt={10}
      maxW="100%"
      m={4}
      pb={10}
      width="100%"
      height="100vh"
      position="relative"
      fontSize="40%"
      paddingTop="60px" // Add padding equal to the height of the top menu
      paddingBottom="40px" // Add padding equal to the height of the footer
    >
      <FrontHead />
    </Flex>
  );
}
