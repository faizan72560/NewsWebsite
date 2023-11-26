import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("IsLoggedIn")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedOut]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const router = useRouter();

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {/* <a className="text-white px-3 py-2 rounded-md text-sm font-medium"> */}
              Home
              {/* </a> */}
            </Link>
            {localStorage?.getItem("isLoggedIn") && (
              <Link
                href="/bookmark"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium list-none"
              >
                BookMark
              </Link>
            )}
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/world"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                World
              </Link>
              <Link
                href="/politics"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Politics
              </Link>
              <Link
                href="/technology"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Technology
              </Link>
              {!localStorage.getItem("isLoggedIn") && !isLoggedIn && (
                <Link
                  href="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              )}
              {!localStorage.getItem("isLoggedIn") && !isLoggedIn && (
                <Link
                  href="/signup"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  SignUp
                </Link>
              )}
              {localStorage.getItem("isLoggedIn") && (
                <li
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium list-none"
                  onClick={() => {
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("news");
                    localStorage.removeItem("bookmarkItem");

                    setIsLoggedOut(true);
                  }}
                >
                  Logout
                </li>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col mx-2">
          {/* Mobile navigation items */}
          <Link
            href="/world"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            {/* <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"> */}
            World
            {/* </a> */}
          </Link>
          <Link
            href="/politics"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Politics
          </Link>
          <Link
            href="/technology"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Technology
          </Link>
          {!localStorage.getItem("isLoggedIn") && !isLoggedIn && (
            <Link
              href="/login"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
          )}
          {!localStorage.getItem("isLoggedIn") && !isLoggedIn && (
            <Link
              href="/signup"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              SignUp
            </Link>
          )}

          {localStorage.getItem("isLoggedIn") && (
            <li
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium list-none"
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                router.push("/");
                setIsLoggedOut(true);
              }}
            >
              Logout
            </li>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
