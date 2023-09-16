import React from "react";
import { useColorModeValue, Flex, HStack, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import LeftNav from "./newnavbarleft";

<<<<<<< HEAD
console.log("Topmenu component rendered");
=======
>>>>>>> bbe3434f0494198e70ff02d026b3a69a489bd0d7
export default function TopMenu() {
  const bg = useColorModeValue("linear-gradient(180deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8))", "linear-gradient(180deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8))");

  return (
<<<<<<< HEAD
    <Flex bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md" position="absolute">
      <Flex alignItems="center" justifyContent="center" mx="auto">
        <HStack spacing={1} mr={1} color="brand.500" display={{ base: "none", md: "inline-flex" }}>
          <NextLink href="/">
            <Button variant="ghost" color='whiteAlpha.900'>Home</Button>
          </NextLink>
          <NextLink href="/api/auth/signin">
            <Button variant="ghost" color='whiteAlpha.900'>Inloggen</Button>
          </NextLink>
          <NextLink href="/contact">
            <Button variant="ghost" color='whiteAlpha.900'>Contact</Button>
          </NextLink>
          <NextLink href="/slides">
            <Button variant="ghost" color='whiteAlpha.900'>Slides</Button>
          </NextLink>
        </HStack>
=======
    <Flex bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md" position="fixed">
      <Flex alignItems="center" justifyContent="center" mx="auto">
        <HStack spacing={1} mr={1} color="brand.500" display={{ base: "none", md: "inline-flex" }}>
          <NextLink href="/">
            <Button variant="ghost">Home</Button>
          </NextLink>
          <NextLink href="/portfolio">
            <Button variant="ghost">Portfolio</Button>
          </NextLink>
          <NextLink href="/contact">
            <Button variant="ghost">Contact</Button>
          </NextLink>
        </HStack>
        <LeftNav />
>>>>>>> bbe3434f0494198e70ff02d026b3a69a489bd0d7
      </Flex>
    </Flex>
  );
}
