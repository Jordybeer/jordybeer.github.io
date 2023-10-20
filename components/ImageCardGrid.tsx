import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Flex, Text, Button, Image, AspectRatio } from "@chakra-ui/react";

interface ImageCardProps {
  title: string;
  images: string[];
  description: string;
}

const ImageCardGrid: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<ImageCardProps | null>(null);

  const cards: ImageCardProps[] = [
    {
      title: "Project 1",
      images: ["/image1.jpg", "/image2.jpg"], //
      description: "This is project 1",
    },
  ];

  return (
    <Flex
      wrap="wrap"
      pt="15"
      justifyContent="center"
      rounded={{ base: "none", sm: "none", md: "3xl", lg: "3xl", xl: "3xl" }}
      display="inline-block"
      shadow="dark-lg"
      transition={"background 0.3s ease"}
      width={{ base: "100vw", sm: "100vw" }}
      maxW={{ base: "100vw", sm: "100vw", md: "xl", lg: "2xl", xl: "3xl" }}
    >
      <AnimatePresence>
        {selectedCard ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box /* Styles for the expanded card */>
              {/* Carousel */}
              <AspectRatio ratio={16 / 9}>
                <Image src={selectedCard.images[0]} objectFit="cover" />
              </AspectRatio>
              {/* Thumbnails */}
              <Flex direction="column">
                {selectedCard.images.map((img, index) => (
                  <Image key={index} src={img} boxSize="50px" />
                ))}
              </Flex>
              {/* Buttons and Description */}
              <Flex direction="column">
                <Button onClick={() => setSelectedCard(null)}>Go Back</Button>
                <Button>Next</Button>
                <Text>{selectedCard.description}</Text>
              </Flex>
            </Box>
          </motion.div>
        ) : (
          cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Box
                bgImage={`url(${card.images[0]})`}
                bgSize="cover"
                bgPosition="center"
                h="200px"
                w="300px"
                m="10px"
                position="relative"
                onClick={() => setSelectedCard(card)}
              >
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bg="rgba(0, 0, 0, 0.5)"
                >
                  <Text color="white">{card.title}</Text>
                </Box>
              </Box>
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default ImageCardGrid;
