import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import CardGrid from '../components/CardGrid';
import ExpandedCard from '../components/ExpandedCard';

const Projects = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      maxW={{ base: "100%", sm: "100%" }}
      m={4}
      pb={10}
      width="100%"
      height="100%"
      position="relative"
      fontSize="80%"
      zIndex={1}
    >
    {/* Div for instant dimming and dark gray background */}
    {selectedCard && (
        <div
        onClick={() => setSelectedCard(null)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(50, 50, 50, 0.8)', // Dark gray transparent dim
          zIndex: 998,
          transition: 'background-color 1s ease' // Instant dimming
        }}></div>
      )}
      <CardGrid setSelectedCard={setSelectedCard} data={undefined} />
      {selectedCard && <ExpandedCard data={selectedCard} setSelectedCard={setSelectedCard} />}
    </Flex>
  );
};

export default Projects;
