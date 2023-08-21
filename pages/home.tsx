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
import TopMenu from '../components/topmenu'
export default function Home() {
  return (
    <>
      <Flex
      direction="column"
      justify="center"
      align="center"
    // pt={10}
      maxW={{base: '100%', sm:'100%'}}
      // maxH={{base: '100%', sm:'100%'}}
      // pr={2}
      // pl={7}
      m= {4}
      pb={10}
      width="100%"
      height="100%"
      position="fixed"
      fontSize="80%">

        <Header />
        <LeftNav />

        <FrontHead />
        {/* <Divider /> */}

{/* <NextJsCarousel /> */}


        {/* <IconList /> */}



  {/* <Divider /> */}

                     {/* <Model3D /> */}
      {/* <Divider /> */}
      </Flex>



    </>
  );
}
