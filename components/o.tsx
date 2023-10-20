import React, { FC } from "react";
import { chakra, Box, Button, Flex } from "@chakra-ui/react";
import "@fontsource-variable/raleway";

type ColorProps = {
  title: string;
  subtitle: string;
  text: string;
};

type ButtonProps = {
  scheme: string;
  step1: string;
  step2: string;
  step3: string;
  size: string;
};

const FrontHead: FC = () => {
  const colors: ColorProps = {
    title: "#FFFFFF",
    subtitle: "#FFD700",
    text: "#FFFFFF",
  };

  const gradient: string = "linear-gradient(55deg, #34139546 30%, #0F2E77CE 70%)";
  const subtitleOpacity: string = "1";
  const textShadow: string = "1px 1px 2px rgba(0,0,0,0.5)";

  const buttonProps: ButtonProps = {
    scheme: "yellow",
    step1: "600",
    step2: "500",
    step3: "300",
    size: "lg",
  };
};

// ...Continuing from the first chunk

return (
  <Flex direction="column" align="center" justify="center" p={8}>
    <Box
      mx="auto"
      display="flex"
      maxW={{ base: "7xl" }}
      width={{ base: "100vw", sm: "100vw" }}
      transition={"background 0.3s ease"}
      px={{ base: 4, sm: 6, lg: 10 }}
      mt="auto"
      position="relative"
      zIndex={1}
      bg={gradient}
      justifyContent="center"
      rounded={{ base: "none", md: "3xl" }}
      shadow={{ base: "none", md: "dark-lg" }}
      border='1mm ridge #3A80C56F'
      width={{ base: "100vw", sm: "100vw" }}
      maxW={{ base: "100vw", sm: "100vw", md: "xl", lg: "2xl", xl: "3xl" }}
    >
      <Box
        w="full"
        display="flex"
        flexDir="column"
        height="full"
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
        >

// ...Continuing from the second chunk

          <chakra.h1
            letterSpacing="tight"
            lineHeight="short"
            fontWeight="extrabold"
            rounded="md"
            color={colors.title}
            _dark={{ color: colors.title }}
            opacity={subtitleOpacity}
            textShadow={textShadow}
            textAlign="center"
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
              color={colors.subtitle}
              opacity={subtitleOpacity}
              textShadow={textShadow}
            >
            // ...Continuing from the third chunk

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
color={colors.text}
textAlign="left"
backdropFilter="blur(1.2px)"
shadow="xl"
border="solid 5px transparent"
>
Stap binnen in mijn wereld van solide vakmanschap, waar hout en
staal samenkomen om unieke meubelstukken te creëren. Van jouw ideeën
tot tastbare kunstwerken, elke creatie vertelt een verhaal van
ambacht en passie. Ontdek de harmonie van materialen en de kracht
van individualiteit bij RB Lasprojecten.
</chakra.p>
<Flex
display="flex"
flexDir="row"
justifyContent="center"
p="30"
>
// ...Continuing from the fourth chunk

<Flex
  display="flex"
  flexDir="row"
  justifyContent="center"
  p="30"
>
  <Button
    bot={20}
    bgColor="#115F9E"
    color="white"
    fontWeight="large"
    rounded="xl"
    shadow="dark-lg"
    border="solid 2px black"
    size={buttonProps.size}
    _focus={{ outline: "none" }}
    transition="background 0.8s"
    _hover={{
      bgColor: `${buttonProps.scheme}.${buttonProps.step2}`,
      bgGradient: `radial(circle, transparent 1%, ${buttonProps.scheme}.${buttonProps.step2} 1%)`,
      bgPos: "center",
      backgroundSize: "15000%",
    }}
    _active={{
      bgColor: `${buttonProps.scheme}.${buttonProps.step3}`,
      backgroundSize: "100%",
      transition: "background 0s",
    }}
    mr={4}
  >
    Bekijk projecten{" "}
  </Button>
  {/* Incomplete code */}
</Flex>
</Box>
</Box>
</Flex>
);
};

export default FrontHead;
