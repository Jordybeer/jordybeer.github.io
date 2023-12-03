import { motion } from "framer-motion";

type CardProps = {
  data: any; // You might want to specify a more detailed type for the data
  setSelectedCard: React.Dispatch<React.SetStateAction<any>> | null; // Allowing for null value
};

const Card = ({ data, setSelectedCard }: CardProps) => {
  const handleClick = () => {
    console.log("Card clicked:", data); // Log de data bij klikken
    setSelectedCard(data);
    if (setSelectedCard && typeof setSelectedCard === 'function') {
      setSelectedCard(data);
    } else {
      console.error('setSelectedCard is not a function');
    }
  };

  const handleClick = () => {
    if (setSelectedCard && typeof setSelectedCard === 'function') {
      setSelectedCard(data);
    } else {
      console.error('setSelectedCard is not a function');
    }
  };

  return (
    <motion.div
      className="card"
      p={20}
      onClick={handleClick} // Gebruik de handleClick functie hier
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="card-title">{data.title}</h1>
      <img src={data.img} alt={data.title} />
    </motion.div>
  );
};

export default Card;
