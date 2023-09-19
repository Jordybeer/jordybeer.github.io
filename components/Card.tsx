import { motion } from 'framer-motion';

type CardProps = {
  data: any;
  setSelectedCard: React.Dispatch<any>;
};

const Card = ({ data, setSelectedCard }: CardProps) => {
  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      onClick={() => setSelectedCard(data)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img src={data.img} alt={data.title} />
      <h3>{data.title}</h3>
    </motion.div>
  );
};

export default Card;
