import { Link } from "@tanstack/react-router";
import { FaRegCircleUser } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1>Logo</h1>
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/characters">Characters</Link>
        </nav>
        <FaRegCircleUser
          className="text-primary hover:text-primary-dark cursor-pointer"
          size={20}
        />
      </div>
    </header>
  );
}
