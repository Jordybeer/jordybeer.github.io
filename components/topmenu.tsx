import React from "react";
import { useColorModeValue, Flex, HStack, Button, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from "@chakra-ui/react";
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
              isActive={{background: "#FFD700"}}

            >Projecten</MenuButton>
              <MenuList
              bgColor="#262547">
                <NextLink
                href="/projects">
                <MenuItem
                bgColor="#262547"
                _hover={{ bg: "#FFD700" }}
                >Oude projecten</MenuItem>
                </NextLink>
                <NextLink href="/robbert">
                <MenuItem
                bgColor="#262547"
                _hover={{ bg: "#FFD700" }}>Nieuwe projecten</MenuItem>
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
          <NextLink href="/robbert">
            <Button
              variant="ghost"
              color="whiteAlpha.900"
              aria-label="Over"
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
