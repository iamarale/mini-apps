import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/Ui/Header";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
