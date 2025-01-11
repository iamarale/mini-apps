import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="p-8 text-white">
      <div className="container mx-auto">
        <h1 className="text-xl font-bold underline">Socials</h1>
        <ul className="flex gap-4">
          <li className="text-primary hover:text-primary-dark mt-2">
            <a target="_blank" href="https://github.com/iamarale">
              <FaGithub size={20} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
