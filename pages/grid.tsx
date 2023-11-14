import React from "react";
import CardGrid from "../components/CardGrid"; // Adjust the import path based on where you place the component

console.log("ImageCardGrid loaded at least");
const grid: React.FC = () => {
  return (
    <div>
      <h1>Image Card Grid</h1>
      <CardGrid />
    </div>
  );
};

export default grid;
