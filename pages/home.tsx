import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import NextJsCarousel from '../components/mobcar';
import {
  Divider,
  Flex,
  Text,
  Box,
} from '@chakra-ui/react';
import IconList from '../components/list';
import FrontHead from '../components/fronthead';
import Header from '../components/header';
import LeftNav from '../components/newnavbarleft';
export default function Home() {
  return (
    <>
      <Flex
      direction="column"
      justify="center"
      align="center"
    pt={10}
      maxW={{base: '100%', sm:'100%'}}
      // maxH={{base: '100%', sm:'100%'}}
      // pr={2}
      // pl={7}
      m= {4}
      pb={10}
      width="100%"
      height="100%"
      position="relative"
      fontSize="80%">
<Box
  align="center"
  bg="rgba(255, 255, 255, 0.05)"
  p={4}
  width="100%"
  maxH={{base: 'xs', sm:'xs', md:'xl', lg:'2xl',xl:'3xl'}}
  maxW={{base:'md', sm:'md', md:'xl', lg:'2xl',xl:'3xl'}}
  fontFamily='Raleway Variable'
  fontWeight="bold"
  rounded="3xl"
  backdropFilter="blur(15px)"
  shadow="dark-lg"
  style={{ padding: '1rem' }}
>
  <Text
    pb='5'
    fontSize={{base:'2xl', sm:'2xl', md:'3xl', lg:'5xl',xl:'5xl'}}
    pt='5'
    pb='5'
    letterSpacing='wide'
    color='blue.900'
    opacity={1}
  >
    RB Lasprojecten
  </Text>
</Box>
        <Header />
        <LeftNav />

        <FrontHead />
        <Divider />

<NextJsCarousel />


        <IconList />



  <Divider />

                     {/* <Model3D /> */}
      <Divider />
      </Flex>



    </>
  );
}
