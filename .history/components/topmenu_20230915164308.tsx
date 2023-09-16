import React from "react";
import { useColorModeValue, Flex, HStack, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import LeftNav from "./newnavbarleft";

export default function TopMenu() {
  const bg = useColorModeValue("linear-gradient(180deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8))", "linear-gradient(180deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8))");

  return (
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
      </Flex>
    </Flex>
  );
}
