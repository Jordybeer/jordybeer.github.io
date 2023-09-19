import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import CardGrid from '../components/CardGrid';
import ExpandedCard from '../components/ExpandedCard';

const Projects = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <Box>
      <CardGrid setSelectedCard={setSelectedCard} data={undefined} />
      {selectedCard && <ExpandedCard data={selectedCard} setSelectedCard={setSelectedCard} />}
    </Box>
  );
};

export default Projects;
