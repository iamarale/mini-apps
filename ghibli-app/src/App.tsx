import { Link } from "@tanstack/react-router";
import { SlControlPlay } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa";
import Card from "./components/Ui/Card";
import Footer from "./components/Ui/Footer";
import { useEffect, useState } from "react";
import { getGhibliData } from "./api/films";

interface Films {
  id: string;
  title: string;
  rt_score: number;
  image: string;
  release_date: string;
}
export default function App() {
  const [topFilms, setTopFilms] = useState<Films[]>([]);

  useEffect(() => {
    const fetchTopFilms = async () => {
      try {
        const data = await getGhibliData("films");

        const sortedFilms = data
          .sort((a: Films, b: Films) => b.rt_score - a.rt_score)
          .slice(0, 3);

        setTopFilms(sortedFilms);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };
    fetchTopFilms();
  }, []);

  return (
    <section className="bg-hero h-[500px]">
      <main className="container mx-auto flex h-full flex-col justify-center p-2 md:p-0">
        <div className="max-w-2xl">
          <h1 className="mb-1 text-4xl font-bold">Whisper of the forest</h1>
          <p>
            Journey into a mystical realm where ancient spirits and nature holds
            secrets beyond imagination. A new tale from the creators of your
            favorite magical adventures
          </p>
        </div>

        <Link
          className="mt-8 flex max-w-fit items-center gap-2 rounded-md bg-primary px-4 py-2 text-white transition-all duration-300 hover:bg-primary-dark"
          to="/movies"
        >
          <span>
            <SlControlPlay />
          </span>
          View all Movies
        </Link>
      </main>
      <div className="container mx-auto mb-16 mt-24 p-2 md:p-0">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Featured Films</h1>
          <Link
            className="flex items-center gap-2 text-primary hover:underline"
            to="/movies"
          >
            View all
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {topFilms.map((film) => (
            <Card
              key={film.id}
              image={film.image}
              title={film.title}
              year={film.release_date}
              rating={Number(film.rt_score)}
            />
          ))}
        </div>

        <div className="mt-24 text-center">
          <h1 className="text-2xl font-bold">About Studio Ghibli</h1>
          <p className="mb-4 mt-1 opacity-70">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            tempore quidem suscipit totam maxime temporibus? Eveniet nisi illo
            sed. Veritatis, eum sit et ducimus quae magnam consequuntur dolorem
            molestiae eos ad ipsa nesciunt illo porro eius beatae voluptatum
            doloremque architecto.
          </p>
          <Link className="text-primary hover:text-primary-dark" to="/movies">
            Learn More About Our Story
          </Link>
        </div>
      </div>
      <hr></hr>
      <Footer />
    </section>
  );
}
