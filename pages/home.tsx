
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import IconList from "../components/list";
import Model3D from "../components/mm";
import NextJsCarousel from "../components/mobcar";
import { Divider, Box, Heading, Highlight, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import LayoutHome from "../components/layouthome"


export default function Home() {
  return (
    <>

   <Box m={3} pb={5}>
  <Heading lineHeight='tall' fontFamily='Open Sans'>
    <Highlight
      query={['Unieke', 'passie']}
      styles={{
        px: '3',
        py: '1',
        rounded: 'full',
        bg: 'blue.300',
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
        bg: 'blue.300',
        color: '#007170',
        letterSpacing: 'wide',
      }}
    >
      Gemaakt met passie
    </Highlight>
  </Heading>
</Box>
  </motion.div>
      <IconList />
      <Divider />  
      
       {/* <Model3D /> */}
   
   <Divider />
   
    </>
  );
}
