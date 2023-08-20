import { useState } from "react";
import {
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Stack,
  DrawerBody,
  Box,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import Fooder from "./fooder";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import React from "react";
import "@fontsource-variable/raleway";
import styles from "../components/header.module.css";

export default function LeftNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Flex>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <Flex
        borderRight="2px solid #cccccc"
        bg="transparent"
        position="fixed"
        top="0"
        right="0"
        left="0"
        zIndex="999"
        align="center"
      >
        <Flex display="flex">
          <IconButton
            aria-label="Open menu"
            variant="solid"
            color="white"
            bgColor="#7E71E3B1"
            icon={<HamburgerIcon />}
            onClick={toggleMenu}
            _hover={{ bg: "#BFAE73" }}
            my={5}
            ml={2}
            fontSize="3xl"
            position="fixed"
            display="flex"
            mx={2}
            justifyContent="center"
          />
        </Flex>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="left"
        size={{ base: "xs", sm: "xs", md: "xs" }}
        onClose={toggleMenu}
        children={undefined}
      >
        <DrawerOverlay />
        <DrawerContent bg="#7E71E3B1" color="7F71E3CB">
          {" "}
          {/* Set the background color to 7F71E3 */}
          {/* <DrawerCloseButton /> */}
          <DrawerBody>
            <Flex direction="column" alignItems="center">
              <Stack
                spacing="5"
                pt="10"
                align="center"
                justify="center"
                fontFamily="Raleway Variable"
                fontSize="4xlg"
              >
                {/* font gold */}
                <DrawerHeader
                  borderBottomWidth="2px"
                  color="#BFAE73"
                  fontSize="2xl"
                  m="4"
                >
                  RB Lasprojecten
                </DrawerHeader>

                <Button
                  as="a"
                  href="/"
                  variant="ghost"
                  aria-label="Menu"
                  _hover={{ bg: "#BFAE73" }}
                >
                  Portfolio
                </Button>
                <Button
                  as="a"
                  href="/"
                  variant="ghost"
                  aria-label="Menu"
                  _hover={{ bg: "#BFAE73" }}
                >
                  Te koop
                </Button>
                <Button
                  as="a"
                  href="/"
                  variant="outlined"
                  aria-label="Menu"
                  _hover={{ bg: "#BFAE73" }}
                >
                  Over mij
                </Button>
                <Button
                  as="a"
                  href="/"
                  variant="ghost"
                  aria-label="Menu"
                  _hover={{ bg: "#BFAE73" }}
                >
                  Contact
                </Button>

                {/* todo only show login when not logged in */}
                <Button
                  as="a"
                  href="/api/auth/signin"
                  variant="ghost"
                  aria-label="Login"
                  _hover={{ bg: "#BFAE73" }}
                >
                  Sign in
                </Button>
              </Stack>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={8}
                pl="4"
                pr="4"
                pt="4"
                maxW="90%"
                maxL="90%"
              >
                <Image src="https://i.imgur.com/TEV6O5d.png" alt="logo-white" />
              </Box>
            </Flex>
          </DrawerBody>
          <Fooder />
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
