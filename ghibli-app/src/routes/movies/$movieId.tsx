import { createFileRoute, useParams } from "@tanstack/react-router";
import { getGhibliData } from "../../api/films";

export const Route = createFileRoute("/movies/$movieId")({
  component: () => {
    const film = Route.useLoaderData();
    console.log(film);
    return (
      <div key={film.id} className="container mx-auto mt-16 p-4">
        <h1 className="text-2xl font-bold">{film.title}</h1>
        <p>{film.description}</p>
        <figure className="mt-4 flex flex-col gap-2">
          <img
            className="rounded-md"
            src={film.movie_banner}
            alt={`${film.title} movie banner`}
          />
          <figcaption className="text-sm opacity-70">
            {film.title} movie banner
          </figcaption>
        </figure>
        <div className="flex justify-between">
          <h2>{film.release_date}</h2>
          <h2>{film.rt_score}</h2>
        </div>

        <button className="rounded-md border-2 border-primary p-2 duration-150 hover:bg-primary-dark">
          Favorite
        </button>
      </div>
    );
  },
  loader: async ({ params }) => {
    console.log(params.movieId);
    const film = await getGhibliData(`films/${params.movieId}`);
    return film;
  },
});
