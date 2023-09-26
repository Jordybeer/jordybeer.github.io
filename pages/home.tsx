import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NextJsCarousel from "../components/mobcar";
import Fooder from "../components/fooder";
import { Divider, Flex, Text, Box } from "@chakra-ui/react";
import IconList from "../components/list";
import FrontHead from "../components/fronthead";
import Header from "../components/header";
export default function Home() {
  return (
    <>
      <Flex
        direction="column"
        justify="center"
        align="center"
        pt={10}
        maxW={{ base: "100%", sm: "100%" }}
        m={4}
        pb={10}
        width="100%"
        height="100%"
        position="relative"
        fontSize="80%"
      >
        <FrontHead />
      </Flex>
    </>
  );
}
