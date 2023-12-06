import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Flex, Divider, Image, CloseButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import NewButton from "../components/newbutton";



type ExpandedCardProps = {
  data: any; // Ideally, you should define a more specific type or interface for data
  setSelectedCard: React.Dispatch<React.SetStateAction<any>>; // Ensure the type matches the expected function
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
    arrows: false,
    autoplaySpeed: 3000,
    adaptiveHeight: false,
    draggable: true,
    pauseOnHover: true,
    swipeToSlide: true,
    variableWidth: false,
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


  return (
    <AnimatePresence>
      {data && (
        <motion.div
          layoutId={`${data.id}`}
          className="expanded-card"
          ref={cardRef}
          style={{
            width: "80%", // 65vw on smaller screens, 85vw on larger screens
            height: "80%", // 65vh on smaller screens, 85vh on larger screens
            backgroundColor: "transparent",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "999",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
              <Flex
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                justifyContent="center"
                p="2"
              >
                {data.images.map((img, index) => (
                  <Box
                    key={index}
                    w="16"
                    h="16"
                    bg="rgba(255, 255, 255, 0.2)"
                    borderRadius="2xl"
                    border="2px solid black"
                    mx="1"
                    opacity={index === 0 ? 1 : 0.5}
                    cursor="pointer"
                    onClick={() => handleThumbnailClick(index)}
                    style={{
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
<Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    objectFit="contain"
                    borderRadius="50%"
                  />
                  </Box>
                ))}
              </Flex>
            </Box>


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
