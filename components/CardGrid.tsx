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
      // Existing data points
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
      // New data points
      {
        img: 'https://source.unsplash.com/random/150x100?food,1',
        title: 'Delicious Home-Cooked Meals',
        description: lorem.generateSentences(7),
        images: [
          'https://source.unsplash.com/random/300x200?food,1',
          'https://source.unsplash.com/random/300x200?food,2',
          'https://source.unsplash.com/random/300x200?food,3',
        ]
      },
      {
        img: 'https://source.unsplash.com/random/150x100?technology,1',
        title: 'Cutting-Edge Tech Gadgets',
        description: lorem.generateSentences(6),
        images: [
          'https://source.unsplash.com/random/300x200?technology,1',
          'https://source.unsplash.com/random/300x200?technology,2',
          'https://source.unsplash.com/random/300x200?technology,3',
        ]
      },
      {
        img: 'https://source.unsplash.com/random/150x100?animals,1',
        title: 'Wildlife Adventures',
        description: lorem.generateSentences(8),
        images: [
          'https://source.unsplash.com/random/300x200?animals,1',
          'https://source.unsplash.com/random/300x200?animals,2',
          'https://source.unsplash.com/random/300x200?animals,3',
        ]
      },
      {
        img: 'https://source.unsplash.com/random/150x100?sports,1',
        title: 'Extreme Sports Gear',
        description: lorem.generateSentences(5),
        images: [
          'https://source.unsplash.com/random/300x200?sports,1',
          'https://source.unsplash.com/random/300x200?sports,2',
          'https://source.unsplash.com/random/300x200?sports,3',
        ]
      },
      {
        img: 'https://source.unsplash.com/random/150x100?travel,1',
        title: 'Travel Essentials',
        description: lorem.generateSentences(7),
        images: [
          'https://source.unsplash.com/random/300x200?travel,1',
          'https://source.unsplash.com/random/300x200?travel,2',
          'https://source.unsplash.com/random/300x200?travel,3',
        ]
      },
      {
        img: 'https://source.unsplash.com/random/150x100?music,1',
        title: 'Music Gear',
        description: lorem.generateSentences(6),
        images: [
          'https://source.unsplash.com/random/300x200?music,1',
          'https://source.unsplash.com/random/300x200?music,2',
          'https://source.unsplash.com/random/300x200?music,3',
        ]
      },
      {
        img: 'https://source.unsplash.com/random/150x100?animals,1',
        title: 'Wildlife Adventures',
        description: lorem.generateSentences(8),
        images: [
          'https://source.unsplash.com/random/300x200?animals,1',
          'https://source.unsplash.com/random/300x200?animals,2',
          'https://source.unsplash.com/random/300x200?animals,3',
        ]
      },
      {
        img: 'https://source.unsplash.com/random/150x100?sports,1',
        title: 'Extreme Sports Gear',
        description: lorem.generateSentences(5),
        images: [
          'https://source.unsplash.com/random/300x200?sports,1',
          'https://source.unsplash.com/random/300x200?sports,2',
          'https://source.unsplash.com/random/300x200?sports,3',
        ]
      }
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
