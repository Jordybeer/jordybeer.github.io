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
//buttons
import { useRouter } from "next/router";
import NextLink from "next/link";

import NewButton from "../components/newbutton";

const TestPage: React.FC = () => {
  const bg = "linear-gradient(55deg, #34139546 30%, #0F2E77CE 70%)";
  const router = useRouter();

  //  const bg = "linear-gradient(180deg, #225282 100%, #1A2B3C 70%, #1A2B3C 40%)";
  const titleColor = "#FFFFFF";
  const subtitleColor = "#FFD700";
  const textColor = "#FFFFFF";
  const subtitleOpacity = "1";
  const textShadow = "1px 1px 2px rgba(0,0,0,0.5)";

  //buttons

  const scheme = "yellow"; // Replace with your preferred color scheme
  const step1 = "600";
  const step2 = "500";
  const step3 = "300";
  const size = "lg"; // Keeping only the largest size

  return (
    <Flex direction="column" align="center" justify="center" p={8}>
      <Box
        maxW="xl"
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
        <Flex direction={{ base: "column", md: "column" }}>
          {/*          experimentele inhoud */}

          <Flex display="flex" flexDir="row" justifyContent="center" p="30">
            <NewButton href="/" label="?" />
            <NewButton href="/projects" />
          </Flex>

          <NewButton href="/projects" label="Bijzettafel metalen X frame" />
          <NewButton
            href="/"
            label="Another Button"
            colorScheme="blue"
            size="md"
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default TestPage;
