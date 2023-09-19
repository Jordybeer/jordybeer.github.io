import { motion } from 'framer-motion';

type CardProps = {
  data: any;
  setSelectedCard: React.Dispatch<any>;
};

const Card = ({ data, setSelectedCard }: CardProps) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setSelectedCard(data)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}  // <-- Add this line for fade-out
      transition={{ duration: 0.5 }}  // <-- You can adjust the duration
    >
      <img src={data.img} alt={data.title} />
      <h3>{data.title}</h3>
    </motion.div>
  );
};

export default Card;