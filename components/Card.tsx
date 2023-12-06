import { motion } from "framer-motion";

type CardProps = {
  data: any; // Je kunt hier een meer gedetailleerd type voor de data specificeren
  setSelectedCard: React.Dispatch<React.SetStateAction<any>> | null; // Toestaan van null waarde
};

const Card = ({ data, setSelectedCard }: CardProps) => {
  const handleClick = () => {
    console.log("Card clicked:", data); // Log de data bij klikken
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
