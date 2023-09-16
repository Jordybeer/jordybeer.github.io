import React from 'react';
import ImageCardGrid from '../components/ImageCardGrid'; // Adjust the import path based on where you place the component

console.log('ImageCardGrid loaded at least')
const grid: React.FC = () => {
  return (
    <div>
      <h1>Image Card Grid</h1>
      <ImageCardGrid />
    </div>
  );
};

export default grid;
