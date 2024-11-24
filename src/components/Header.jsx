import React, { useState } from "react";
import logo from "../../assets/logo.webp";

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(prevState => !prevState);
    };
  return (
    <header className="bg-white border-b border-gray-300 border-solid md:relative lg:relative fixed w-full z-30">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-14 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <img className="w-24" src={logo} alt="" />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-3 text-xs uppercase font-semibold">
                <li>
                  <a
                    className="text-black transition hover:text-black/75"
                    href="#services">
                    {" "}
                    Services{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition hover:text-black/75"
                    href="#Portfolio">
                    {" "}
                    Portfolio{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition hover:text-black/75"
                    href="#About">
                    {" "}
                    about{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition hover:text-black/75"
                    href="#review">
                    {" "}
                    reviews{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition hover:text-black/75"
                    href="#contact">
                    {" "}
                    contact{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="block md:hidden" onClick={toggleDropdown}>
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

            </div>
          </div>
              {isDropdownOpen && (
                          <div className="drop md:flex mt-[14.05rem] -ml-6 md:items-center md:gap-12 bg-white opacity-90 py-5 absolute w-full lg:hidden">
                          
                          <nav aria-label="Global" className="block md:hidden">
                            <ul className="flex flex-col pl-4 items-start gap-3 text-xs uppercase font-semibold">
                              <li>
                                <a
                                  className="text-black transition hover:text-black/75"
                                  href="#services">
                                  {" "}
                                  Services{" "}
                                </a>
                              </li>
              
                              <li>
                                <a
                                  className="text-black transition hover:text-black/75"
                                  href="#Portfolio">
                                  {" "}
                                  Portfolio{" "}
                                </a>
                              </li>
              
                              <li>
                                <a
                                  className="text-black transition hover:text-black/75"
                                  href="#About">
                                  {" "}
                                  about{" "}
                                </a>
                              </li>
              
                              <li>
                                <a
                                  className="text-black transition hover:text-black/75"
                                  href="#review">
                                  {" "}
                                  reviews{" "}
                                </a>
                              </li>
              
                              <li>
                                <a
                                  className="text-black transition hover:text-black/75"
                                  href="#contact">
                                  {" "}
                                  contact{" "}
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
              )}


        </div>
      </div>

    </header>
  );
};

export default Header;
