import React from "react";
import Card from "./Card";
import { AnimatePresence, motion } from "framer-motion";
import { Grid, useBreakpointValue, Box } from "@chakra-ui/react";

type CardGridProps = {
  setCardSelection: React.Dispatch<React.SetStateAction<any>>;
  data: any[];
};

const CardGrid: React.FC<CardGridProps> = ({ setCardSelection, data }) => {
  const columns = 2;

  return (
    <AnimatePresence>
      <Grid
      templateColumns={`repeat(${columns}, 1fr)`}
      gap={6}
      box-shadow="0px 4px 10px rgba(0, 0, 0, 0.1)"

      p={4}
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          ><Box borderRadius="lg">

            <Card data={item} setSelectedCard={setCardSelection} />
        </Box>
          </motion.div>
        ))}
      </Grid>
    </AnimatePresence>
  );
};

export default CardGrid;
