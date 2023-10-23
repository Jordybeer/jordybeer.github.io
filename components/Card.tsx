import { motion } from "framer-motion";

type CardProps = {
  data: any;
  setSelectedCard: React.Dispatch<any>;
};

const Card = ({ data, setSelectedCard }: CardProps) => {
  return (
    <motion.div
      className="card"
      p={20}
/*       whileHover={{ scale: 1.05 }} */
      onClick={() => setSelectedCard(data)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="card-title">{data.title}</h1>
      <img src={data.img} alt={data.title} />
    </motion.div>
  );
};

export default Card;
