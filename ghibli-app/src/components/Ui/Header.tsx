import { Link } from "@tanstack/react-router";
import { FaRegCircleUser } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1>Logo</h1>
        <nav className="flex gap-4">
          <Link
            className="[&.active]:font-bold [&.active]:text-primary [&.active]:underline"
            to="/"
          >
            Home
          </Link>
          <Link
            className="[&.active]:font-bold [&.active]:text-primary [&.active]:underline"
            to="/movies"
          >
            Movies
          </Link>
          <Link
            className="[&.active]:font-bold [&.active]:text-primary [&.active]:underline"
            to="/characters"
          >
            Characters
          </Link>
        </nav>
        <FaRegCircleUser
          className="cursor-pointer text-primary hover:text-primary-dark"
          size={20}
        />
      </div>
    </header>
  );
}
