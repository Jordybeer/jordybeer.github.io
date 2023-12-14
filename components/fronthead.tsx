import React from "react";
import { chakra, Box, Button, Flex, HStack } from "@chakra-ui/react";
import "@fontsource-variable/raleway";
import { useRouter } from "next/router";
import NextLink from "next/link";
import NewButton from "../components/newbutton";

export default function FrontHead() {
  const bg = "linear-gradient(55deg, #34139546 30%, #0F2E77CE 70%)";
  const router = useRouter();

  const titleColor = "#FFFFFF";
  const subtitleColor = "#FFD700";
  const textColor = "#FFFFFF";
  const subtitleOpacity = "1";
  const textShadow = "1px 1px 2px rgba(0,0,0,0.5)";

  const scheme = "yellow"; // Replace with your preferred color scheme
  const step1 = "600";
  const step2 = "500";

  return (
<Flex justifyContent="center" alignItems="center" pt="20">


<Box
  // other props
  display="flex"
  transition={"background 0.3s ease"}
  px={{ base: 4, sm: 6, lg: 10 }}
  bg={bg}
  h="fit-content" // set height to auto
  justifyContent="center"
  alignItems="center"
  shadow={{ base: "none", md: "dark-lg" }}
  borderRadius="lg"
  border={{ base: "none", md: "2px solid #1C1B43"}}
  rounded= {{base: "none", md: "3xl"}}
  width={{ base: "100vw", sm: "100vw" }}
  maxW={{ base: "sm", sm: "60vw", md: "xl", lg: "2xl", xl: "3xl" }} // Reduced maxW values
  overflow="hidden"
  maxH= {{xl:"xl"}}
>
  {/* .
        {/* image in the middle */}

        <Box
          w="full"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          position="relative"
          aspectRatio={1}
          zIndex={0}
        >
          <Box
            as="img"
            opacity={0.4}
            src="https://i.imgur.com/41sjJtw.png"
            alt="RB logo"
            position="absolute"
            width="100%"
            height="100%"
            top="50"
            left="50"
            bot="50"
            zIndex={-1}
            top="auto"
            bottom="auto"
            right="auto"
            left="auto"
            objectFit="contain"
          />
          <chakra.h1
            letterSpacing="tight"
            lineHeight="short"
            fontWeight="extrabold"
            rounded="md"
            color={titleColor}
            _dark={{ color: titleColor }}
            opacity={subtitleOpacity}
            textShadow={textShadow}
            textAlign="center"
            fontSize={{ base: "3xl", sm: "5xl", lg: "6xl" }}
          >
            <chakra.span
              fontSize={{ base: "5xl", sm: "5xl", lg: "6xl" }}
              fontFamily="Raleway Variable"
              pt="20"
              display={{ base: "block", sm: "md", lg: "block" }}
            >
              Waar dromen
            </chakra.span>
            <chakra.span
              fontFamily={"Raleway Variable"}
              fontSize={{ base: "5xl", sm: "5xl", lg: "6xl" }}
              color={subtitleColor}
              opacity={subtitleOpacity}
              textShadow={textShadow}
            >
              vorm krijgen
            </chakra.span>
          </chakra.h1>
          <chakra.p
            mx="auto"
            my="auto"
            mt={{ base: 3, sm: 5, md: 5 }}
            fontSize={{ sm: "2xl", md: "2xl" }}
            maxW={{ sm: "xl" }}
            color={textColor}
            textAlign="left"
            shadow="xl"
            border="solid 5px transparent"
            fontSize={{ base: "lg", sm: "2xl", md: "2xl" }}

          >
            Stap binnen in mijn wereld van solide vakmanschap, waar hout en
            staal samenkomen om unieke meubelstukken te creëren. Van jouw ideeën
            tot tastbare kunstwerken, elke creatie vertelt een verhaal van
            ambacht en passie. Ontdek de harmonie van materialen en de kracht
            van individualiteit bij RB Lasprojecten.
          </chakra.p>
          {/* New Buttons */}
          {/* <Flex justifyContent="center" bot="0" mt={5}> */}
          <Flex display="flex" flexDir="row" justifyContent="center" p="30">
          <HStack spacing={4}  my ={5} mt={5}>

            <NewButton size={{ base: "md", md: "md", lg: "lg" }} href="/projects" label="Bekijk mijn projecten" />
            <NewButton size={{ base: "md", md: "md", lg: "lg" }} href="/contact" label="Neem contact op" />
          </HStack>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
