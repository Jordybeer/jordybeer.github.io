import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Spacer,
  Button,
  VStack,
} from "@chakra-ui/react";
import NewButton from "../components/newbutton";

const AboutMe: React.FC = () => {
  return (
    <Flex direction="column" align="center" justify="center" p={8}>
      <Box
        maxW="3xl"
        borderWidth={1}
        borderRadius="lg"
        border="2px transparent"
        p={6}
        boxShadow="lg"
        bgColor="#151E6CB1"
        shadow="dark-lg"
        border="solid 2px black"
        rounded="3xl"
      >
        <Flex direction={{ base: "column", md: "row" }}>
          <Box flexShrink={0}>
            <Image
              borderRadius="full"
              boxSize={{ base: "100px", md: "150px" }}
              src="https://via.placeholder.com/150"
              alt="Profielfoto"
            />
          </Box>
          <VStack align="start" ml={{ base: 0, md: 6 }} mt={{ base: 4, md: 0 }}>
            <Heading as="h2" size="xl">
              Hey, ik ben Robbert!
            </Heading>
            <Text
              fontSize="lg"
              color="alphaWhite.600"
              textDecoration="underline "
            >
              Zelfstandig Lasser & Meubelmaker
            </Text>
            <Text mt={4} textShadow="">
              Lassen heeft me altijd al gefascineerd. Wat begon als een hobby,
              is nu mijn beroep. Ik combineer zwart metaal met hout om unieke
              meubelen te creëren. Elk stuk is een stukje van mijzelf.
            </Text>
            <Spacer />
            <NewButton href="/showcase" label="Showcase" />
            <NewButton href="/projecten" label="Catalogus" />
          </VStack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AboutMe;
