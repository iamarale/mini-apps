import { createLazyFileRoute } from "@tanstack/react-router";
import Movies from "../components/Movies";

export const Route = createLazyFileRoute("/movies")({
  component: Movies,
});

function movies() {
  return <div className="p-2">Hello from movies!</div>;
}
