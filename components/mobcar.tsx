import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Card, Stack, CardBody,CardHeader,Flex} from "@chakra-ui/react";
import Nuke from "./toast";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FiMenu } from "react-icons/fi";

export default class NextJsCarousel extends React.Component {
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
            duration: 1.5,
          }
        },
      }}>
      <Card shadow="dark-lg" 
// bgGradient="linear(to bottom left, #BA90EE9B, #2E51BBB7, )"  
borderRadius='lg'
      bgColor='#1a202c'
borderWidth='2px'
      color='gray'
      // overflow='hidden'
      direction={{base: 'column', sm: 'row'}}
      maxW='xl'
      maxH='xl'
        height={"60%"}
        width={"80%"}
        display='relative'
        overflow='hidden'
        pt={10}
        m={4}
        
        zIndex={8} // Set a higher z-index value
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
              src="https://i.imgur.com/x2FnRDZ.png"
              alt="image1"
            />
            <p className="legend">Bureau en kruk met doorlopend stalen Z-frame en massief eigen blad. Tijdloos ontwerp met de perfecte combinatie van robuust opgeborsteld staal en het warme eikenhout. Staal behandeld met een blanke, krasvaste laklaag en het houten blad en zitting met duurzame olie.</p>
          </div>
          <div>
            <img
              src="https://i.imgur.com/l7x9foi.png"
              alt="image2"
            />
            <p className="legend">Dressoir met 1 open kant zodat hij over de radiator tegen de muur past. Door de 3 liggers onderin tussen de poten een robuust meubel om bij de voordeur te staan voor spullen als post en sleutels etc. omdat 1 kant open is past deze mooi over de radiator heen en beschermt hij deze tegen krassen en stoten.</p>
          </div>
          <div>
            <img
              src="https://i.imgur.com/qoDbYhf.png"
              alt="image3"
            />
            <p className="legend">Dit stalen frame zorgt ervoor dat het kunstwerk mooi op ooghoogte staat en beter tot zijn recht komt. Daarnaast past het door het ontwerp met 3 poten precies onder de ronde sokkel. De perfecte combinatie tussen een mooie toevoeging voor het kunstwerk maar ook een die de aandacht niet wegneemt van het beeld</p>
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