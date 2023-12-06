import React from "react";
import Card from "./Card";
import { AnimatePresence, motion } from "framer-motion";
import { Grid, useBreakpointValue } from "@chakra-ui/react";

type CardGridProps = {
  setCardSelection: React.Dispatch<React.SetStateAction<any>>;
  data: any[];
};

const CardGrid: React.FC<CardGridProps> = ({ setCardSelection, data }) => {
  const columns = useBreakpointValue({ base: 2, md: 2, lg: 3 });

  return (
    <AnimatePresence>
      <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
        {data.map((item, index) => (
          <motion.div
            key={index}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Card data={item} setSelectedCard={setCardSelection} />
          </motion.div>
        ))}
      </Grid>
    </AnimatePresence>
  );
};

export default CardGrid;
