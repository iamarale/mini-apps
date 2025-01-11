// App.tsx
import React, { useEffect, useState } from "react";
import { getGhibliData } from "../api/films";
import Card from "./Ui/Card";

const App: React.FC = () => {
  const [films, setFilms] = useState<[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getFilms = async () => {
      try {
        setLoading(true);
        const filmsData = await getGhibliData("films");
        setFilms(filmsData);
        console.log(filmsData);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
      }
    };

    getFilms();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container mx-auto mt-16 p-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Explore Films</h1>
        <p className="opacity-70">
          Discover the magical world of Studio Ghibli through their collection
          of animated masterpieces.
        </p>
      </div>
      <div className="mt-8 flex justify-between">
        <input
          className="bg-secondary rounded-md px-2 py-1"
          type="text"
          placeholder="Search a movie..."
        />
        <div className="flex items-center gap-2">
          <h4>Sort by: </h4>
          <select className="bg-secondary rounded-md px-2 py-1">
            <option value="title">Title</option>
            <option value="year">Year</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        {films.map((film) => (
          <Card
            image={film.image}
            title={film.title}
            year={film.year}
            rating={film.rating}
          />
        ))}
      </div>
    </main>
  );
};

export default App;
