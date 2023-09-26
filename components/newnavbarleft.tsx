import { useState } from "react";
import {
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Stack,
  Button,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export default function LeftNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Flex>
      <IconButton
        aria-label="Menu"
        icon={<HamburgerIcon />}
        size="lg"
        variant="ghost"
        color="white"
        onClick={toggleMenu}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        size={{ base: "xs", sm: "xs" }}
        onClose={toggleMenu}
      >
        <DrawerOverlay />
        <DrawerContent bg="#7E71E3B7" color="white">
          <DrawerBody>
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
            >
              <Stack
                spacing="5"
                pt="5"
                pt="10"
                align="center"
                maxW={{ base: "xs", sm: "xs", md: "xl", lg: "2xl", xl: "3xl" }}
              >
                <NextLink href="/">
                  <Button
                    variant="ghost"
                    color="whiteAlpha.900"
                    aria-label="Menu"
                    _hover={{ bg: "#FFD700" }}
                    size={{ base: "sm", md: "md" }}
                  >
                    Home
                  </Button>
                </NextLink>
                <NextLink href="/contact">
                  <Button
                    variant="ghost"
                    color="whiteAlpha.900"
                    aria-label="Menu"
                    _hover={{ bg: "#FFD700" }}
                    size={{ base: "sm", md: "md" }}
                  >
                    Contact
                  </Button>
                </NextLink>
                <NextLink href="/slides">
                  <Button
                    variant="ghost"
                    color="whiteAlpha.900"
                    aria-label="Menu"
                    _hover={{ bg: "#FFD700" }}
                    size={{ base: "sm", md: "md" }}
                  >
                    Album
                  </Button>
                </NextLink>{" "}
                <NextLink href="/models">
                  <Button
                    variant="ghost"
                    color="whiteAlpha.900"
                    aria-label="Menu"
                    _hover={{ bg: "#FFD700" }}
                    size={{ base: "sm", md: "md" }}
                  >
                    3D Models
                  </Button>
                </NextLink>
              </Stack>
              <Stack spacing="5" pb="4" align="center">
                <Image
                  src="https://i.imgur.com/TEV6O5d.png"
                  alt="logo-white"
                  maxW={{
                    base: "xs",
                    sm: "xs",
                    md: "xl",
                    lg: "2xl",
                    xl: "3xl",
                  }}
                  maxH={{
                    base: "xs",
                    sm: "xs",
                    md: "xl",
                    lg: "2xl",
                    xl: "3xl",
                  }}
                />
              </Stack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
