import { motion } from "framer-motion";

type CardProps = {
  data: any;
  setSelectedCard: React.Dispatch<any>;
};

const Card = ({ data, setSelectedCard }: CardProps) => {
  const handleClick = () => {
    console.log("Card clicked:", data); // Log de data bij klikken
    setSelectedCard(data);
  };

  return (
    <motion.div
      className="card"
      p={20}
      onClick={handleClick} // Gebruik de handleClick functie hier
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="card-title">{data.title}</h1>
      <img src={data.img} alt={data.title} />
    </motion.div>
  );
};

export default Card;
