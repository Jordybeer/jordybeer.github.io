import React, { useState, useEffect, useCallback } from 'react';
import Card from './Card';
import { LoremIpsum } from 'lorem-ipsum';
import { motion, AnimatePresence } from 'framer-motion';

interface CardGridProps {
  setSelectedCard: React.Dispatch<React.SetStateAction<any>>;
  data:any;
}

const CardGrid: React.FC<CardGridProps> = ({ setSelectedCard }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4
      },
      wordsPerSentence: {
        max: 16,
        min: 4
      }
    });

    const generatedData = [
      {
        img: 'https://source.unsplash.com/random/150x100?nature,1',
        title: 'Werkbank met stalen frames',
        description: lorem.generateSentences(5),
        images: [
          'https://source.unsplash.com/random/300x200?nature,1',
          'https://source.unsplash.com/random/300x200?nature,2',
          'https://source.unsplash.com/random/300x200?nature,3',
        ]
      },
      {
        img: 'https://source.unsplash.com/random/150x100?city,1',
        title: lorem.generateWords(1),
        description: lorem.generateSentences(9),
        images: [
          'https://source.unsplash.com/random/300x200?city,1',
          'https://source.unsplash.com/random/300x200?city,2',
          'https://source.unsplash.com/random/300x200?city,3',
        ]
      },
      // ... you can add more data here
    ];

    setData(generatedData);
  }, []);

  return (
    <AnimatePresence>
    <div className="grid">
      {data.map((item, index) => (
        <Card key={index} data={item} setSelectedCard={setSelectedCard} />
      ))}
    </div>
  </AnimatePresence>
  );
};

export default CardGrid;
