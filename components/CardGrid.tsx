import React from "react";
import Card from "./Card";
import { AnimatePresence, motion } from "framer-motion";
import { Flex } from "@chakra-ui/react";

type CardGridProps = {
  setCardSelection: React.Dispatch<React.SetStateAction<any>>;
  data: any[];
};

const CardGrid: React.FC<CardGridProps> = ({ setCardSelection, data }) => {
  return (
    <AnimatePresence>
      <Flex className="grid" justifyContent="center">
        {data.map((item, index) => (
          <motion.div
            key={index}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Card data={item} setSelectedCard={setCardSelection} />
          </motion.div>
        ))}
      </Flex>
    </AnimatePresence>
  );
};

export default CardGrid;
