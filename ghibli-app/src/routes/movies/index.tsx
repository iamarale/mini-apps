import { createFileRoute } from "@tanstack/react-router";
import Movies from "../../components/Movies";
import onPending from "../../components/Ui/onPending";
export const Route = createFileRoute("/movies/")({
  component: Movies,
  pendingComponent: onPending,
});
