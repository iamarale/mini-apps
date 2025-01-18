import { createFileRoute } from "@tanstack/react-router";
import { getGhibliData } from "../../api/films";

export const Route = createFileRoute("/movies/$movieId")({
  component: MovieDetails,
  loader: async ({ params }) => {
    console.log(params.movieId);
    const film = await getGhibliData(`films/${params.movieId}`);
    return film;
  },
});

function MovieDetails() {
  const film = Route.useLoaderData();
  console.log(film);

  function convertToStars(rating: number) {
    if (rating < 0 || rating > 100) "errrrrrrrrrrror";
    return Math.ceil(rating / 20);
  }

  function getStarRating(rating: number) {
    const stars = convertToStars(rating);
    return "★".repeat(stars) + "☆".repeat(5 - stars);
  }

  const rating = parseInt(film.rt_score, 10);
  const starRatings = getStarRating(rating);

  return (
    <div key={film.id} className="">
      <figure className="flex flex-col gap-2 xl:container xl:mx-auto">
        <img
          className="xl:rounded-md"
          src={film.movie_banner}
          alt={`${film.title} movie banner`}
        />
        <figcaption className="container mx-auto flex justify-center text-sm font-light opacity-50">
          {film.title} movie banner
        </figcaption>
      </figure>

      <div className="container mx-auto flex gap-8">
        <img
          src={film.image}
          className="relative top-[-250px] max-w-xs rounded-md"
          alt={`${film.title} movie`}
        />
        <div className="mt-8 flex gap-6">
          <h1 className="flex flex-col text-2xl font-bold">
            <span className="text-sm font-light opacity-50"> English</span>
            {film.title}
          </h1>
          <h1 className="flex flex-col text-2xl font-bold">
            <span className="text-sm font-light opacity-50">
              {" "}
              Original Japanese Title
            </span>
            {film.original_title}
          </h1>
          <h1 className="flex flex-col text-2xl font-bold">
            <span className="text-sm font-light opacity-50">
              Original Romanised
            </span>
            {film.original_title_romanised}
          </h1>
        </div>
      </div>
      <div className="container relative top-[-230px] mx-auto">
        <div className="flex items-center gap-4">
          <p className="flex flex-col text-lg">
            {starRatings}
            <span>{`(${rating}/100)`}</span>
          </p>

          <h3 className="flex justify-center opacity-50">
            {film.release_date}
          </h3>
        </div>
      </div>
    </div>
  );
}
