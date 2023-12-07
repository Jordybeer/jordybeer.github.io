import React from "react";
import {
  useColorModeValue,
  Flex,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/layout";
interface TopMenuProps {
  // Removed unused 'pages' prop
}

const TopMenu: React.FC<TopMenuProps> = () => {
  const router = useRouter();
  const bg = "#262547";

return (
  <Flex
  py={{ base: 4, md: 2 }} // reduce vertical padding on larger screens
  pb={{ base: 5, md: 3 }} // reduce bottom padding on larger screens
  bg={bg}
  w="full"
  zIndex={3}
  shadow={{ base: "dark-lg", md: "dark-lg" }}
  borderBottom="4px solid #08053A54"
  px={{ base: 2, sm: 4 }}
  shadow="md"
  position="absolute"
  top={0}
  width="100%"
  alignItems="center"
>
      <Flex my="auto" mx="auto">
        <HStack
          spacing={3}
          mr={1}
          borderBottom="4px dash #088CF8"
          shadow="xl"
          color="brand.500"
          display={{ base: "inline-flex", md: "inline-flex" }}
        >
          <NextLink href="/">
            <Button
              variant="roundleft"
              color="whiteAlpha.900"
              aria-label="Home"
              _hover={{ bg: "#FFD700" }}
              size={{ base: "sm", md: "md" }}
            >
              Home
            </Button>
          </NextLink>

          <Menu>
            <MenuButton
              bgColor="#262547"
              as={Button}
              variant="roundleft"
              color="whiteAlpha.900"
              aria-label="Projecten"
              _hover={{ bg: "#FFD700" }}
              size={{ base: "sm", md: "md" }}
              isActive={{ background: "#FFD700" }}
            >
              Projecten
            </MenuButton>
            <MenuList bgColor="#262547">
              <NextLink href="/projects">
                <MenuItem bgColor="#262547" _hover={{ bg: "#FFD700" }}>
                  Showcase
                </MenuItem>
              </NextLink>
              <NextLink href="/about">
                <MenuItem bgColor="#262547" _hover={{ bg: "#FFD700" }}>
                  Catalogus
                </MenuItem>
              </NextLink>
            </MenuList>
          </Menu>

          <NextLink href="/contact">
            <Button
              variant="ghost"
              color="whiteAlpha.900"
              aria-label="Contact"
              _hover={{ bg: "#FFD700" }}
              size={{ base: "sm", md: "md" }}
            >
              Contact
            </Button>
          </NextLink>
          <NextLink href="/about">
            <Button
              variant="ghost"
              color="whiteAlpha.900"
              aria-label="Over"
              _hover={{ bg: "#FFD700" }}
              size={{ base: "sm", md: "md" }}
            >
              Over mij
            </Button>
          </NextLink>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default TopMenu;
