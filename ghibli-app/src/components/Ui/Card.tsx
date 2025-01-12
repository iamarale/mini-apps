import { CiStar } from "react-icons/ci";
import { motion } from "framer-motion";
interface CardProps {
  image: string;
  title: string;
  year: string;
  rating: number;
}
const Card = ({ image, title, year, rating }: CardProps) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, transition: { duration: 2 } }}
      initial={{ opacity: 0 }}
      className="relative mx-auto h-[700px] w-full rounded-lg bg-cover bg-center bg-no-repeat shadow-md"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="absolute bottom-0 flex w-full items-center justify-between bg-gradient-to-t from-black via-transparent p-2 text-white">
        <div>
          <h2>{title}</h2>
          <small>{year}</small>
        </div>
        <h1 className="flex items-center gap-2">
          <span>
            <CiStar className="text-yellow-500" />
          </span>
          {rating}
        </h1>
      </div>
    </motion.div>
  );
};

export default Card;
