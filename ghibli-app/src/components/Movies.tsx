// App.tsx
import React, { useEffect, useState } from "react";
import { getGhibliData } from "../api/films";

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
    <main className="container mx-auto">
      <h1>Films</h1>
      <ul>
        {films.map((film) => (
          <li key={film.id}>{film.title}</li> // Replace 'id' and 'title' with your API data structure
        ))}
      </ul>
    </main>
  );
};

export default App;
