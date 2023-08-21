import * as React from "react";
import { motion } from "framer-motion";

const Fader  = () => {
    return (
<motion.div 
initial="hidden" 
animate="visible" 
variants={{
  hidden: {
    scale: .5,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .5
    }
  },
}}></motion.div>
    )}

    export default Fader;

