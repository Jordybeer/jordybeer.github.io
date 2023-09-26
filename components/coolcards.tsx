import React, { useState, useRef } from "react";

import { motion } from "framer-motion";

// An array of cards to display.

const cards = [1, 2, 3, 4];

const CoolCards = () => {
  // The currently selected card.
  const [selectedId, setSelectedId] = useState(null);
  // Whether or not the current card can be dragged.

  const [canDrag, setCanDrag] = useState(false);
  // An array of refs to the card containers.
  const containerRefs = useRef(new Array());

  // Handles the end of a card pan.

  const handlePanEnd = (e: any, info: any, card: number) => {
    // If there is a card selected...

    if (selectedId) {
      // ... and the card was dragged a short distance...

      if (Math.abs(info.offset.x) < 5) {
        // ... get the timeout for the card.

        const styles = getComputedStyle(containerRefs.current[card]);

        const timeout = parseFloat(styles.transform.split(",")[4]) * -0.6;

        // Set the card to not be draggable.

        setCanDrag(false);

        // After the timeout, unselect the card.

        setTimeout(() => {
          setSelectedId(null);
        }, timeout);
      }
    } else {
      // If there is no card selected, set the card to be draggable.

      setCanDrag(true);

      setSelectedId(card);
    }
  };

  return (
    <div className="layout-cards">
      {cards.map((card, i) => (
        <motion.div
          className={selectedId === card ? "opened-card" : "card"}
          key={i}
          layout
          drag={selectedId === card ? "x" : false}
          dragConstraints={{ left: canDrag ? -850 : 0, right: 0 }}
          dragElastic={0.2}
          onPanEnd={(e, info) => handlePanEnd(e, info, card)}
          ref={(el) => (containerRefs.current[card] = el)}
        >
          {selectedId === card && (
            <>
              <div />

              <div />

              <div />
            </>
          )}
        </motion.div>
      ))}

      <motion.div
        className="dim-layer"
        animate={{ opacity: selectedId ? 0.3 : 0 }}
      />
    </div>
  );
};
export default CoolCards;
