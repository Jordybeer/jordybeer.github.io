import React from "react";
import {
  useColorModeValue,
  useDisclosure,
  chakra,
  Flex,
  HStack,
  Button,
  Box,
} from "@chakra-ui/react";
import "@fontsource/lato";
import LeftNav from "./newnavbarleft";
export default function TopMenu() {
  const bg = useColorModeValue(
    "linear-gradient(180deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8))",
    "linear-gradient(180deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8))",
  );
  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        alignContent={"center"}
        justifyContent="center"
        py={4}
        shadow="md"
        fontFamily="Raleway Variable"
        fontWeight="bold"
      >
        <Flex alignItems="center" justifyContent="center" mx="auto">
          <Flex>
            <chakra.a href="/" display="flex" alignItems="center">
              {/* <Image
              src="https://i.imgur.com/TEV6O5d.png"
              alt="logo-white"
              maxW={{base:'xs', sm:'xs', md:'xl', lg:'2xl',xl:'3xl'}}
              maxH={{base:'xs', sm:'xs', md:'xl', lg:'2xl',xl:'3xl'}}

              />{" "} */}
              {/* <VisuallyHidden>RB Lasprojecten</VisuallyHidden> */}
            </chakra.a>
            {/* <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              RB Lasprojecten
            </chakra.h1> */}
            <chakra.h1
              color="#FFD700"
              fontFamily="Raleway Variable"
              //   pl='10'
              fontSize="30px"
              textShadow="1px 1px 2px rgba(0,0,0,0.5)"
            >
              RB Lasprojecten
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Portfolio</Button>
              <Button variant="ghost">Te koop</Button>
              <Button variant="ghost">Over mij</Button>
              <Button variant="ghost">Contact</Button>
              <Button variant="ghost">Aanmelden</Button>
            </HStack>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              {/* <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Features
                </Button>
                <Button w="full" variant="ghost">
                  Pricing
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
                <Button w="full" variant="ghost">
                  Company
                </Button>
                <Button w="full" variant="ghost">
                  Sign in
                </Button>
              </VStack> */}
              <LeftNav />
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
