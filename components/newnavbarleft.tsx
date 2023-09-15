import { useState } from "react";
import { Flex, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerBody, Stack, Button, Image } from "@chakra-ui/react";
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
      <Drawer isOpen={isOpen} placement="left" size={{ base: "xs", sm: "xs" }} onClose={toggleMenu}>
        <DrawerOverlay />
        <DrawerContent bg="#7E71E3B7" color="#FFD700">
          <DrawerBody>
            <Stack spacing="5" pt="5" align="center" justify="center">
              <Image src="https://i.imgur.com/TEV6O5d.png" alt="logo-white" maxW={{ base: "xs", sm: "xs", md: "xl", lg: "2xl", xl: "3xl" }} maxH={{ base: "xs", sm: "xs", md: "xl", lg: "2xl", xl: "3xl" }} />
              <NextLink href="/">
                <Button variant="ghost" aria-label="Menu" _hover={{ bg: "#FFD700" }}>
                  Home
                </Button>
              </NextLink>
              <NextLink href="/contact">
                <Button variant="ghost" aria-label="Menu" _hover={{ bg: "#FFD700" }}>
                  Contact
                </Button>
              </NextLink>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
