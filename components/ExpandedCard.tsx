import React, { useRef, useEffect, useState} from "react";
import Slider from "react-slick";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Flex, Divider, Image, CloseButton,Button, useBreakpointValue, HStack, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon, MinusIcon, CloseIcon, UpDownIcon} from "@chakra-ui/icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NewButton from "../components/newbutton";

type ExpandedCardProps = {
  data: any;
  setSelectedCard: React.Dispatch<React.SetStateAction<any>>;
};



const ExpandedCard: React.FC<ExpandedCardProps> = ({
  data,
  setSelectedCard,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<Slider>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);

  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  const handleSlideChange = (current: number) => {
    setSelectedThumbnail(current);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
      setSelectedCard(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [data]);

  /**
   * Settings for the carousel component.
   */
  const settings = {
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    adaptiveHeight: false,
    draggable: true,
    pauseOnHover: true,
    swipeToSlide: true,
    variableWidth: false,
    dots:true,
    afterChange: handleSlideChange,
  };

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  const handleThumbnailClick = (index: number) => {
    sliderRef.current?.slickGoTo(index);
    sliderRef.current?.slickPause();
    setSelectedThumbnail(index);
  };


  const boxRef = React.useRef(null);

  const enterFullscreen = (element: HTMLElement) => {
    element.style.position = 'absolute';
    element.style.top = '0';
    element.style.left = '0';
    element.style.width = '100vw';
    element.style.height = '100vh';
    element.style.zIndex = '9999';

    const images = element.querySelectorAll('.img');
    images.forEach((image: any) => {
      image.style.backgroundSize = 'cover';
    });

    setIsFullscreen(true);
  };

  const exitFullscreen = (element: HTMLElement) => {
    element.style.position = '';
    element.style.top = '';
    element.style.left = '';
    element.style.width = '';
    element.style.height = '';
    element.style.zIndex = '';

    const images = element.querySelectorAll('.img');
    images.forEach((image: any) => {
      image.style.backgroundSize = 'contain';
    });

    setIsFullscreen(false);
  };


// Styling
const width = "auto";
const maxWidth = useBreakpointValue({ base: "90%", sm: "80%", md: "90%", lg: "60%", xl: "50%" });
const minWidth = useBreakpointValue({ base: "80%", sm: "50%" });

return (
<Box
  position="fixed"
  top={{base:"50%", md:"50%", lg:"50%", xl:"10%"}}
  left={{base:"50%", md:"50%", lg:"50%", xl:"35%"}}
  transform="translate(-50%, -50%)"
  maxW={{ base: "90vw", md: "50vw", lg: "50vw", xl: "50vw" }}
  h= {{base: "80%", xl:"90%"}}
  w="100%"
  zIndex="1000"
>
  <AnimatePresence>
    {data && (
      <motion.div
        layoutId={`${data.id}`}
        className="expanded-card"
        ref={cardRef}
        style={{
          maxWidth: maxWidth,
          height: "80vh",
          minWidth: minWidth,
          backgroundColor: "transparent",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "999",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "30px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.8)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
        exit={{ opacity: 0, transition: { duration: 1.5 } }}
      >
<Flex direction="column" className="content-box" h="100%">
  <Box ref={boxRef} flex="1" overflow="hidden" position="relative">
    <Slider ref={sliderRef} {...settings} autoplay={!isFullscreen}>
      {data.images.map((img, index) => (
        <div key={index}>
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      ))}
    </Slider>

    <HStack
  position="absolute"
  top="10px"
  right="10px"
  zIndex="1"
  spacing={4}
>
<IconButton
  size="sm"
  colorScheme="blackAlpha"
  icon={isFullscreen ? <MinusIcon /> : <UpDownIcon />}
  onClick={() => isFullscreen ? exitFullscreen(boxRef.current) : enterFullscreen(boxRef.current)}
  boxShadow="0px 0px 10px rgba(0, 0, 0, 0.8)"
/>
  <IconButton
    size="sm"
    colorScheme="blackAlpha" // semi-transparent white color
    icon={<CloseIcon />}
    onClick={() => setSelectedCard(null)}
    boxShadow="0px 0px 10px rgba(0, 0, 0, 0.8)"
  />
</HStack>
  </Box>

  {/* Thumbnails onder de slider */}
  <Flex justifyContent="center" p="2" alignItems="center">
  <div className="arrow arrow-left" onClick={handlePrevClick}>
    <FaArrowLeft />
  </div>
    {data.images.map((img, index) => (
  <Box
  key={index}
  w="10"
  h="10"
  mx="1"
  opacity={index === selectedThumbnail ? 1 : 0.5}
  cursor="pointer"
  onClick={() => handleThumbnailClick(index)}
  transition="opacity 0.3s ease"
>
        <Image
          src={img}
          alt={`Thumbnail ${index + 1}`}
          objectFit="contain"
        />
      </Box>
    ))}
      <div className="arrow arrow-right" onClick={handleNextClick}>
    <FaArrowRight />
  </div>
  </Flex>


            <Box flex="1" overflowY="auto" mt="2" position="relative">
              <Box p={{ base: 2, sm: 4 }} className="card-title-large">
                <h3>{data.title}</h3>
              </Box>
            <Divider my={2} />


              <Box p={{ base: 2, sm: 4 }} className="card-description-large">
                <p>{data.description}</p>
              </Box>

            <Divider my={2} />

            <Flex
  display="flex"
  flexDir="row"
  justifyContent="space-evenly" // Change this line
  pt={{ base: 2, sm: 4 }}
  position="absolute"
  alignItems="center"
  left="0"
  right="0"
  bot="0"
>
  <NewButton
    href={`/contact?productTitle=${encodeURIComponent(
      data.title,
    )}`}
    label="Vraag offerte"
    width="100%"
    size={{ base: "md", md: "lg" }}
    _hover={{ bgColor: "blue.500", color: "white" }}
  />
  <NewButton
    href="https://instagram.com"
    label="Bekijk meer"
    width="100%"
    size={{ base: "md", md: "lg" }}
    _hover={{ bgColor: "blue.500", color: "white" }}
  />
</Flex>
            </Box>
          </Flex>
        </motion.div>
      )}
    </AnimatePresence>
    </Box>
      );
};
export default ExpandedCard;
