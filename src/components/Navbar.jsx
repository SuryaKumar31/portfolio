import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <section className=" p-0 md:p-3 text-sm fixed z-10 bottom-0 w-full">
      <div className="my-8 flex  md:h-17  items-center justify-center">
        {/* navigation */}
        <nav className="flex items-center gap-1 md:gap-3 rounded-xl bg-gray-100 p-3 md:p-4 text-sm font-medium text-purple-900 shadow-xl fixed z-10">
          {/* logo */}
          <button className="mt-1 text-base font-bold transition-transform hover:scale-110 flex items-center">
            <span className="md:hidden text-lg">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                SK
              </Link>
            </span>
            <span className="hidden md:block text-2xl">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                SURYAKUMAR
              </Link>
            </span>
          </button>
          {/* links */}
          <ul className="flex gap-1 md:gap-2 items-center">
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                className={`li-style cursor-pointer`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="academics"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                className={`li-style cursor-pointer`}
              >
                Academics
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
                className={`li-style cursor-pointer`}
              >
                Projects
              </Link>
            </li>
            {/* button */}
            <li className="transition-transform hover:scale-110">
              <a
                href="https://github.com/SuryaKumar31"
                className="text-2xl sm:text-3xl"
              >
                <FaGithub />
              </a>
            </li>
            <li className="transition-transform hover:scale-110">
              <a
                href="https://www.linkedin.com/in/srisuryakumar-n/"
                className="text-2xl sm:text-3xl"
              >
                <FaLinkedin className="text-blue-600" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
