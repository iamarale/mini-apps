// App.tsx
import React, { useEffect, useState } from "react";
import { getGhibliData } from "../api/films";
import Card from "./Ui/Card";
import Footer from "./Ui/Footer";

interface Films {
  id: string;
  title: string;
  rt_score: number;
  image: string;
  release_date: string;
}

const App: React.FC = () => {
  const [films, setFilms] = useState<Films[]>([]);
  const [sort, setSort] = useState<string>("title");
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getFilms = async () => {
      try {
        setLoading(true);
        const filmsData = await getGhibliData("films");
        setFilms(filmsData);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
      }
    };

    getFilms();
  }, []);

  return (
    <>
      <main className="mt-18 container mx-auto p-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Explore Films</h1>
          <p className="opacity-70">
            Discover the magical world of Studio Ghibli through their collection
            of animated masterpieces.
          </p>
        </div>
        <div className="mt-8 flex justify-between">
          <input
            className="rounded-md bg-secondary px-4 py-2"
            type="text"
            placeholder="Search a movie..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <h4>Sort by: </h4>
            <select
              className="rounded-md bg-secondary px-4 py-2"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="title">Title</option>
              <option value="year">Year</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {films.map((film: Films) => (
            <Card
              key={film.id}
              id={film.id}
              image={film.image}
              title={film.title}
              year={film.release_date}
              rating={film.rt_score}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
