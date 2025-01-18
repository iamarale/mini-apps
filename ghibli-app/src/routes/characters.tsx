import { createFileRoute } from "@tanstack/react-router";
// import Characters from "../components/Characters";
import { getGhibliData } from "../api/films";

interface Person {
  id: string;
  name: string;
  gender: string;
  age: number;
  eye_color: string;
  hair_color: string;
  films: string[];
}

interface Film {
  id: string;
  title: string;
  image: string;
  release_date: string;
  rt_score: number;
}

export const Route = createFileRoute("/characters")({
  component: Chars,
  loader: async () => {
    try {
      const peopleData = await getGhibliData("people");

      // Map over each character and fetch their films
      const peopleWithFilms = await Promise.all(
        peopleData.map(async (person: Person) => {
          try {
            // Fetch film details using async/await
            const filmDetails = await Promise.all(
              person.films.map(async (filmUrl: string) => {
                const response = await fetch(filmUrl);
                if (!response.ok) {
                  throw new Error(`Failed to fetch film at ${filmUrl}`);
                }
                return await response.json();
              }),
            );

            return { ...person, filmDetails }; // Add the fetched film details to each person
          } catch (err: any) {
            console.error(
              `Error fetching films for ${person.name}:`,
              err.message,
            );
            return { ...person, filmDetails: [] }; // Fallback: return person with empty film details
          }
        }),
      );

      return peopleWithFilms;
    } catch (err: any) {
      console.error("Error loading people data:", err.message);
      throw new Error("Failed to load character data."); // Handle the error gracefully
    }
  },
});

function Chars() {
  const people = Route.useLoaderData();
  console.log(people);

  return (
    <main className="container mx-auto">
      <h1>All Characters</h1>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
        {people.map((person: Person) => (
          <article
            key={person.id}
            className="rounded border-[1px] border-primary p-4"
          >
            <h3>{person.name}</h3>
            <p>
              <strong>Gender:</strong> {person.gender}
            </p>
            <p>
              <strong>Age:</strong> {person.age}
            </p>
            <p>
              <strong>Eye Color:</strong> {person.eye_color}
            </p>
            <p>
              <strong>Hair Color:</strong> {person.hair_color}
            </p>
            <div>
              <strong>Films:</strong>
              <ul>
                {person.filmDetails.map((film: Film) => (
                  <li key={film.id}>{film.title}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
