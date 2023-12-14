import { motion } from "framer-motion";
import { Image, Box } from "@chakra-ui/react";

type CardProps = {
  data: any;
  setSelectedCard: React.Dispatch<React.SetStateAction<any>> | null;
};

const Card = ({ data, setSelectedCard }: CardProps) => {
  const handleClick = () => {
    console.log("Card clicked:", data);
    if (setSelectedCard && typeof setSelectedCard === "function") {
      setSelectedCard(data);
    } else {
      console.error("setSelectedCard is not a function");
    }
  };

  return (
    <motion.div
      className="card"
      p={20}
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 1 }}
    >
      <h1 className="card-title">{data.title}</h1>
      <Image src={data.img} alt={data.title} objectFit="contain" borderRadius="24px"
      box-shadow= "0px 4px 10px rgba(0, 0, 0, 0.1)"
      />
    </motion.div>
  );
};

export default Card;
