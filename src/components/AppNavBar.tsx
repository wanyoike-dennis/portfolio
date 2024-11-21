import { useState } from "react";
import pic from "../assets/cs.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="border-gray-200 bg-[#1f1f21] dark:bg-[#1f1f21] dark:border-gray-700">
      <div className="flex flex-wrap items-center justify-between p-4 m-0">
        {/* Logo Section */}
        <Link to="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={pic} className="h-8" alt="logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Dennis Njoroge
          </span>
        </Link>

        {/* Hamburger Button for Small Screens */}
        <button
          onClick={toggleOpen}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg text-gray-400 hover:bg-gray-700 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`w-full lg:flex lg:w-auto lg:items-center ${
            open ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 text-gray-400">
            <li>
              <Link
                to="/about"
                onClick={closeMenu}
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 lg:hover:bg-transparent lg:hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={closeMenu}
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 lg:hover:bg-transparent lg:hover:text-white"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                onClick={closeMenu}
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 lg:hover:bg-transparent lg:hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
