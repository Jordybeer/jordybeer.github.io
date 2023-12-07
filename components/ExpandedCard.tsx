import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Flex, Divider, Image, CloseButton, useBreakpointValue } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
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
  };

// Styling
const width = "auto";
const height = "80%";
const maxWidth = useBreakpointValue({ base: "90%", sm: "80%", md: "90%", lg: "60%", xl: "50%" });
const minWidth = useBreakpointValue({ base: "80%", sm: "50%" });

return (
  <AnimatePresence>
    {data && (
      <motion.div
        layoutId={`${data.id}`}
        className="expanded-card"
        ref={cardRef}
        style={{
          width: width,
          height: height,
          maxWidth: maxWidth,
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
          borderRadius: "0.5rem",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.8)",
          rounded: "3xl",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
        exit={{ opacity: 0, transition: { duration: 1.5 } }}
      >
<Flex direction="column" className="content-box" h="100%">
  <Box flex="1" overflow="hidden" position="relative">
    <Slider ref={sliderRef} {...settings}>
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
    <CloseButton
      size="lg"
      color="#1D2636"
      onClick={() => setSelectedCard(null)}
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        zIndex: 1,
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.8)",
      }}
    />
  </Box>

  {/* Thumbnails onder de slider */}
  <Flex justifyContent="center" p="2" alignItems="center">
  <div className="arrow arrow-left" onClick={handlePrevClick}>
    <FaArrowLeft />
  </div>
    {data.images.map((img, index) => (
      <Box
        key={index}
        w="8" // kleinere breedte
        h="8" // kleinere hoogte
        bg="rgba(255, 255, 255, 0.2)"
        borderRadius="2xl"
        border="2px solid black"
        mx="1"
        opacity={index === 0 ? 1 : 0.5}
        cursor="pointer"
        onClick={() => handleThumbnailClick(index)}
      >
        <Image
          src={img}
          alt={`Thumbnail ${index + 1}`}
          objectFit="cover"
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
  justifyContent="space-between" // Change this line
  p={{ base: 2, sm: 4 }}
  mx={{ base: 2, sm: 10 }}
  position="absolute"
  alignItems="center"
  left="0"
  right="0"
>
  <NewButton
    href={`/contact?productTitle=${encodeURIComponent(
      data.title,
    )}`}
    label="Vraag offerte"
    width="100%"
    size="md"
    _hover={{ bgColor: "blue.500", color: "white" }}
  />
  <NewButton
    href="https://instagram.com"
    label="Bekijk meer"
    width="100%"
    size="md"
    _hover={{ bgColor: "blue.500", color: "white" }}
  />
</Flex>
            </Box>
          </Flex>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ExpandedCard;
