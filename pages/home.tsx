"use client"

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import IconList from "../components/list";
import Model3D from "../components/model";
import NextJsCarousel from "../components/mobcar";
import { Divider, Box, Heading, Highlight, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";



export default function Home() {
  return (
    <>

    <motion.div initial="hidden" animate="visible" variants={{
      hidden: {
        scale:0.01,
        opacity: 1
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: .7,
          duration: .8,
        }
      },
    }}>
   <Box m={3} pb={10}>
  <Heading lineHeight='tall' fontFamily='Open Sans'>
    <Highlight
      query={['Unieke', 'passie']}
      styles={{
        px: '3',
        py: '1',
        rounded: 'full',
        bg: '#18FF08',
        color: '#007170',
        letterSpacing: 'wide',
      }}
    >
      Unieke designs
          </Highlight>
  </Heading>
</Box>

<Box m={3} pb={10}>
  <Heading lineHeight='tall' fontFamily='Open Sans'>
    <Highlight
      query={['Unieke', 'passie']}
      styles={{
        px: '3',
        py: '1',
        rounded: 'full',
        bg: '#18FF08',
        color: '#007170',
        letterSpacing: 'wide',
      }}
    >
      Gemaakt met passie
    </Highlight>
  </Heading>
</Box>
  </motion.div>
      <NextJsCarousel />
      <IconList />
      <Divider />  
      
       {/* <Model3D /> */}
   
   <Divider />
   
    </>
  );
}
