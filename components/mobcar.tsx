import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Card, Stack, CardBody,CardHeader,Flex} from "@chakra-ui/react";
import Nuke from "./toast";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FiMenu } from "react-icons/fi";

export default class NextJsCarousel extends Component {
  render() {
    return (
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale:0.01,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          
          transition: {
            ease: "easeIn",
            delay: 1,
            duration: 1,
          }
        },
      }}>
      <Card
      bgColor={'#03435f'}
      position="relative"
      borderRadius='lg'
      borderWidth='3px'
      color='#007170'
      overflow='hidden'
      direction={{base: 'column', sm: 'row'}}
      maxW='3xl'
      maxH='3xl'
        height={"100%"}
        width={"100%"}
        display='flex'
        pt={10}
        
        zIndex={1} // Set a higher z-index value
      >  

        
        
            {/* <CardHeader pb={10} display='flex' fontWeight={'bold'}>Album is swipe friendly
            </CardHeader>     */}
      
            <Stack>
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          interval = {6000}
          showThumbs={false}
          emulateTouch={true}
          
          className="carousel-container"
        >
          <div>
            <img
              src="https://wood-create.com/wp-content/uploads/2019/03/img_9067-1.jpg"
              alt="image1"
            />
            <p className="legend">Tafel met X poten gemaakt van hout en metaal metaal metaal metaal metaal metaal metaal metaal metaal metaal metaal metaal metaal metaal metaal metaal metaal metaal metaal </p>
          </div>
          <div>
            <img
              src="https://5.imimg.com/data5/ANDROID/Default/2020/8/ZC/OP/YS/28175546/product-jpeg-500x500.jpg"
              alt="image2"
            />
            <p className="legend">Moderne tuinset met meerdere toepasselijke stoelen en tafel</p>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/1200x/23/00/b8/2300b87a8a1530b4d6bb095d9cd82562.jpg"
              alt="image3"
            />
            <p className="legend">Unieke kast gemaakt voor mijn vrouw</p>
          </div>
        </Carousel>
        <Flex
              display="flex"
              justifyContent="center"
              alignItems="center"
              // pt={10}
              pt={2}
              pb={2}
            >
              <Nuke />
              </Flex>
        </Stack>
      
      </Card>
      </motion.div>
    );
  }
}
