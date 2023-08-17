import React from "react";
import { chakra, Box, Flex } from "@chakra-ui/react";
import '@fontsource-variable/raleway';

export default function FrontHead() {
  const bg = "#4682b4 ";
  return (
    <Box pos="relative" overflow="hidden" bg={bg} mt={10} rounded="3xl" display="inline-block" shadow="dark-lg"       transition={'background 0.3s ease'}
    >
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          maxW={{ lg: "2xl" }}
          w={{ lg: "full" }}
          zIndex={1}
          bg={bg}
          border="solid 2px transparent"
        >
          {/* <Image src="/img/logod.png" alt="logo" /> */}
          {/* 
          
          afbeelding fader 
          
          <Icon
            // display={{ base: "none", lg: "block" }}
            position="absolute"
            right={0} 
            top={0}
            bottom={0}
            h="full"
            w={48}
            color={bg}
            transform="translateX(50%)"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon> */}
          <Box
            mx="auto"
            maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              w="full"
              textAlign={{ sm: "center", lg: "left" }}
              justifyContent="center"
              alignItems="center"
            >

      <chakra.h1
fontSize="6xl"
letterSpacing="tight"
        lineHeight="short"
        fontWeight="extrabold"
        color="gray.900"
        _dark={{ color: "white" }
        
      }
      >
                <chakra.span fontFamily='Raleway Variable'

display={{ base: 'block', lg: "block" }}>
                  Waar dromen
                  {/* {" "} */}
                </chakra.span>
                <Box  mx={'2'}/>
                <chakra.span fontFamily={'Raleway Variable'}  color="#BFAE73" _dark={{ color: "#BFAE73" }}>
                  
                  vorm krijgen
                </chakra.span>
</chakra.h1>
              
                </Box>
              
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                fontSize={{ sm: "lg", md: "xl" }}
                maxW={{ sm: "xl" }}
                mx={{ sm: "auto", lg: 0 }}
                // color="#000000"
                color="#333333"
                textAlign='left'
                >
                Stap binnen in mijn wereld van solide vakmanschap, waar hout en staal samenkomen om unieke meubelstukken te creëren. Van jouw ideeën tot tastbare kunstwerken, elke creatie vertelt een verhaal van ambacht en passie. Ontdek de harmonie van materialen en de kracht van individualiteit bij RB Lasprojecten.
              </chakra.p>
   <Box
  mt={{ base: 5, sm: 8 }}
  display="flex"
  flexDirection={{ base: "column", md: "row" }}
  justifyContent={{ sm: "center", md: "flex-start" }}
  alignItems={{ sm: "center", md: "flex-start" }}
  fontWeight="extrabold"
  fontFamily="Raleway Variable"
>
  <Box
    rounded="full"
    shadow="drop"
    mr={{ base: 0, md: 3 }}
    mb={{ base: 3, md: 0 }}
  >
    <chakra.a
      w="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="solid 1px transparent"
      fontSize={{ base: "md", md: "lg" }}
      rounded="md"
      color="white"
      bg="#461da9"
      _hover={{ bg: "#301475" }}
      px={{ base: 8, md: 10 }}
      py={{ base: 3, md: 4 }}
      cursor="pointer"
    >
      Get started
    </chakra.a>
  </Box>
  <Box>
    <chakra.a
      w="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: 8, md: 10 }}
      py={{ base: 3, md: 4 }}
      border="#solid 2px #3B5221"
      fontSize={{ base: "md", md: "lg" }}
      rounded="md"
      color="c7cdfc"
      bg="#c7cdfc"
      _hover={{ bg: "#a9aed6" }}
      cursor="pointer"
    >
      Live demo
    </chakra.a>
  </Box>
</Box>
            </Box>
          </Box>
        </Box>
      </Box>
  );
}