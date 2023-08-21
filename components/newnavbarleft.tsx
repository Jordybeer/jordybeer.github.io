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
// import styles from "../components/header.module.css";

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
        <Flex display= {{ base: "flex", md: "none", lg:'none', xl:'none' }}
        >
          <IconButton
            aria-label="Open menu"
            variant="ghost"
            color="#FFD700"
            _dark={{
              color: "inherit",
            }}
            // bgColor="#7E71E3B1"
            icon={<HamburgerIcon />}
            onClick={toggleMenu}
            _hover={{ bg: "#FFD700" }}
            pt="10"
            pb="4"
            pl="5"
            fontSize="35px"
            position="absolute"
            display="flex"
            mx="auto"
            justifyContent="center"
          />
        </Flex>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="left"
        size={{ base: "xs", sm: "xs" }}

        onClose={toggleMenu}
      >
        <DrawerOverlay />
        <DrawerContent
        // more opacity
        // bg="#7E71E3B1"
        bg="#7E71E3B7"
        // color="7F71E3CB"
        color="#FFD700"
        >
          {" "}
          {/* Set the background color to 7F71E3 */}
          {/* <DrawerCloseButton /> */}
          <DrawerBody>
            <Flex direction="column" alignItems="center">
              <Stack
                spacing="5"
                pt="5"
                align="center"
                justify="center"
                fontFamily="Raleway Variable"
                fontSize="6xl"
              >
                {/* font gold */}
                <DrawerHeader
                  borderBottomWidth="2px"
                  color="#FFD700"
                  fontSize="2xl"
                  m="4"
                >
                  {/* RB Lasprojecten */}
                Menu
                </DrawerHeader>

                <Button
                  as="a"
                  href="/"
                  variant="ghost"
                  aria-label="Menu"
                  _hover={{ bg: "#FFD700" }}
                >
                  Portfolio
                </Button>
                <Button
                  as="a"
                  href="/"
                  variant="ghost"
                  aria-label="Menu"
                  _hover={{ bg: "#FFD700" }}
                >
                  Te koop
                </Button>
                <Button
                  as="a"
                  href="/"
                  variant="ghost"
                  aria-label="Menu"
                  _hover={{ bg: "#FFD700" }}
                >
                  Over mij
                </Button>
                <Button
                  as="a"
                  href="/"
                  variant="ghost"
                  aria-label="Menu"
                  _hover={{ bg: "#FFD700" }}
                >
                  Contact
                </Button>

                {/* todo only show login when not logged in */}
                <Button
                  as="a"
                  href="/api/auth/signin"
                  variant="ghost"
                  aria-label="Login"
                  _hover={{ bg: "#FFD700" }}
                >
                  Aanmelden
                </Button>
              </Stack>
          <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  pl="4"
  pr="4"
  pt="4"
  maxW="90%"
  maxH="90%"
  position="absolute"
  bottom="10"
  left="50%"
  transform="translateX(-50%)"
  marginBottom="10"
>
  <Image src="https://i.imgur.com/SJGxcPo.png" alt="logo-white" />
</Box>
            </Flex>
          </DrawerBody>
          {/* <Fooder /> */}
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
