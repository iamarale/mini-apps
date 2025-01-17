import { CiStar } from "react-icons/ci";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
interface CardProps {
  id: string;
  image: string;
  title: string;
  year: string;
  rating: number;
}
const Card = ({ id, image, title, year, rating }: CardProps) => {
  return (
    <motion.div
      key={id}
      animate={{ scale: 1, opacity: 0.6 }}
      initial={{ scale: 0.5, opacity: 0.5 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05, opacity: 1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={`/movies/${id}`}
        params={{ movieId: id }}
        className="relative flex flex-col items-center justify-center gap-4 rounded-lg bg-secondary p-4 transition-all duration-300 ease-in-out hover:bg-primary"
      >
        <img src={image} alt={title} className="h-full w-full rounded-lg" />

        <div className="flex w-full justify-between align-top">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">{title}</h2>
            <span className="text-xs opacity-70">{year}</span>
          </div>

          <div className="flex items-center gap-2">
            <CiStar className="text-yellow-500" />
            <h2 className="text-md font-bold">{rating}</h2>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
export default Card;
