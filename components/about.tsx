import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Spacer,
  Button,
  HStack,
  VStack,
} from "@chakra-ui/react";
import NewButton from "../components/newbutton";

const AboutMe: React.FC = () => {
  return (
    <Flex direction="column" align="center" justify="center" p={8} marginTop="10vh" minHeight="90vh">
      <Box
        mx="auto"

        display="flex"
        height="50vh"
        maxW={{ base: "7xl" }}
        width={{ base: "100vw", sm: "100vw" }}
        transition={"background 0.3s ease"}
        px={{ base: 4, sm: 6, lg: 10 }}
        py={{ base: 4, sm: 6, lg: 10 }}
        boxShadow="lg"
        position="relative"
        zIndex={2}
        shadow={{ base: "none", md: "dark-lg" }}
        borderRadius="lg"
        rounded={{ base: "none", md: "3xl" }}
        border="2px solid #1C1B43"
        backdropFilter="blur(1.4px)"
        width={{ base: "100vw", sm: "100vw" }}
        maxW={{ base: "100vw", sm: "100vw", md: "xl", lg: "2xl", xl: "3xl" }}
        height={{ base: "auto", sm: "auto", md: "auto", lg: "auto", xl: "auto" }}
      >

<Flex direction="row" alignItems="start">
  <Box flexShrink={0} position="absolute" top={5} right={2} zIndex={-1}>
    <Image
      borderRadius="full"
      boxSize={{ base: "100px", md: "150px" }}
      src="https://i.imgur.com/KMI4fpo.png"
      alt="Profielfoto"
      border="2px solid black"
    />
  </Box>
  <VStack align="start" ml={{ base: 0, md: 6 }} mt={{ base: 4, md: 0 }}>
    <Heading as="h3" size="xl">
      Hey, ik ben Robbert!
    </Heading>
    <Text
      fontSize="lg"
      color="alphaWhite.600"
      textDecoration="underline "
    >
      Zelfstandig Lasser & Meubelmaker
    </Text>
    <Text mt={4} textShadow="" py="7">
      Lassen heeft me altijd al gefascineerd. Wat begon als een hobby,
      is nu mijn beroep. Ik combineer zwart metaal met hout om unieke
      meubelen te creëren. Elk stuk is een stukje van mijzelf.
    </Text>
    <Spacer />
    <HStack spacing={8}>
    <NewButton size={{ base: "lg", md: "md", lg: "lg" }} href="/showcase" label="Showcase" />
    <NewButton size={{ base: "lg", md: "md", lg: "lg" }} href="/projecten" label="Catalogus" />
    </HStack>
  </VStack>
</Flex>

      </Box>
    </Flex>
  );
};

export default AboutMe;
