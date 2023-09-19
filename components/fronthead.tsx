import React from "react";
import { chakra, Box, Button, Flex } from "@chakra-ui/react";
import "@fontsource-variable/raleway";

export default function FrontHead() {
  const bg = "linear-gradient(180deg, #1A2B3C 100%, #1A2B3C 70%, #1A2B3C 40%)";
  const titleColor = "#FFFFFF";
  const subtitleColor = "#FFD700";
  const textColor = "#FFFFFF";
  const subtitleOpacity = "1";
  const textShadow = "1px 1px 2px rgba(0,0,0,0.5)";

  //buttons

  const scheme = "yellow";  // Replace with your preferred color scheme
  const step1 = "600";
  const step2 = "500";
  const step3 = "300";
  const size = "lg"; // Keeping only the largest size

  return (
    <Box
      zIndex={1}
      rounded={{ base: "none", sm: "none", md: "3xl", lg: "3xl", xl: "3xl" }}
      display="inline-block"
      shadow="dark-lg"
      transition={"background 0.3s ease"}
      width={{ base: "100vw", sm: "100vw" }}
      maxW={{ base: "100vw", sm: "100vw", md: "xl", lg: "2xl", xl: "3xl" }}
    >
      <Box maxW="7xl" mx="auto">
        <Box
          pb={{ base: 4, sm: 8, md: 10, lg: 14, xl: 16 }}
          width={{ base: "100vw", sm: "100vw" }}
          maxW={{ base: "100vw", sm: "100vw", md: "xl", lg: "2xl", xl: "3xl" }}
          zIndex={1}
          bg={bg}
          shadow="dark-lg"
          border="solid 2px transparent"
        >
          <Box
            mx="auto"
            maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt="10"
          >
            {/* image in the middle */}

            <Box
              w="full"
              display={{ base: "block",  lg: "block" }}
              justifyContent="center"
              alignItems="center"
              position="relative"
              zIndex={0}
            >
              <Box
                as="img"
                opacity={0.4}
                src="https://i.imgur.com/41sjJtw.png"
                alt="RB logo"
                position="absolute"
                zIndex={-1}
                aspectRatio={1}
                top={{ base: "auto", md: "auto" }}
                left={{ base: "auto", md: "auto" }}
                right={{ base: "auto", md: "auto" }}
                bottom={{ base: "auto", md: "auto" }}
                objectFit="cover"
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
              >
                <chakra.span
                  fontSize={{ base: "5xl", sm: "5xl", lg: "6xl" }}
                  fontFamily="Raleway Variable"
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
                rounded="md"
                backdropFilter="blur(0.5px)"
                shadow="dark-lg"
                style={{ padding: "1rem" }}
              >
                Stap binnen in mijn wereld van solide vakmanschap, waar hout en
                staal samenkomen om unieke meubelstukken te creëren. Van jouw
                ideeën tot tastbare kunstwerken, elke creatie vertelt een
                verhaal van ambacht en passie. Ontdek de harmonie van materialen
                en de kracht van individualiteit bij RB Lasprojecten.
              </chakra.p>
            {/* New Buttons */}
            <Flex justifyContent="center" mt={5}>
              <Button
                bgColor={`${scheme}.${step1}`}
                color="white"
                fontWeight="large"
                rounded="xl"
                shadow="dark-lg"
                size={size}
                _focus={{ outline: "none" }}
                transition="background 0.8s"
                _hover={{
                  bgColor: `${scheme}.${step2}`,
                  bgGradient: `radial(circle, transparent 1%, ${scheme}.${step2} 1%)`,
                  bgPos: "center",
                  backgroundSize: "15000%",
                }}
                _active={{
                  bgColor: `${scheme}.${step3}`,
                  backgroundSize: "100%",
                  transition: "background 0s",
                }}
                mr={4}
              >
Bekijk projecten              </Button>
              <Button
                bgColor={`${scheme}.${step1}`}
                color="white"
                fontWeight="large"
                rounded="xl"
                shadow="dark-lg"
                size={size}
                _focus={{ outline: "none" }}
                transition="background 0.8s"
                _hover={{
                  bgColor: `${scheme}.${step2}`,
                  bgGradient: `radial(circle, transparent 1%, ${scheme}.${step2} 1%)`,
                  bgPos: "center",
                  backgroundSize: "15000%",
                }}
                _active={{
                  bgColor: `${scheme}.${step3}`,
                  backgroundSize: "100%",
                  transition: "background 0s",
                }}>
Neem contact op              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
    </Box>
  );
}
