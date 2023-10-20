import React from "react";
import { useColorModeValue, Flex, HStack, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface TopMenuProps {
  // Removed unused 'pages' prop
}

const TopMenu: React.FC<TopMenuProps> = () => {
  const router = useRouter();
  const bg = "#262547";

  return (
    <Flex
      bg={bg}
      w="full"
      px={{ base: 2, sm: 4 }}
      py={4}
      shadow="md"
      position="fixed"
      overflow="hidden"
      top={0}
      zIndex={10000}
    >
      <Flex alignItems="center" justifyContent="center" mx="auto">
        <HStack
          spacing={1}
          mr={1}
          color="brand.500"
          display={{ base: "inline-flex", md: "inline-flex" }}
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
          <NextLink href="/projects">
            <Button
              variant="ghost"
              color="whiteAlpha.900"
              aria-label="Menu"
              _hover={{ bg: "#FFD700" }}
              size={{ base: "sm", md: "md" }}
            >
              Projecten
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
          <NextLink href="/robbert">
            <Button
              variant="ghost"
              color="whiteAlpha.900"
              aria-label="Menu"
              _hover={{ bg: "#FFD700" }}
              size={{ base: "sm", md: "md" }}
            >
              Over Robbert
            </Button>
          </NextLink>

          <NextLink href="/test">
            <Button
              variant="ghost"
              color="whiteAlpha.900"
              aria-label="test"
              _hover={{ bg: "#FFD700" }}
              size={{ base: "sm", md: "md" }}
            >
              Test
            </Button>
          </NextLink>


        </HStack>
      </Flex>
    </Flex>
  );
};

export default TopMenu;
