import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Flex, Text, Button, Image, AspectRatio } from '@chakra-ui/react';

interface ImageCardProps {
  title: string;
  images: string[];
  description: string;
}

const ImageCardGrid: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<ImageCardProps | null>(null);

  // Dummy data for demonstration
  const cards: ImageCardProps[] = [
    {
      title: 'Project 1',
      images: ['/image1.jpg', '/image2.jpg'],
      description: 'This is project 1',
    },
    // Add more cards here
  ];

  return (
    <Flex wrap="wrap" justifyContent="center">
      <AnimatePresence>
        {selectedCard ? (
          <motion.div /* Framer Motion props for animation */>
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
            <motion.div key={index} /* Framer Motion props for animation */>
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
