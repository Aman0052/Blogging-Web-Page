import { useState } from "react";
import { User, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const Appbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully!");
    setIsOpen(false);
    navigate("/");
  };

  return (
    <header className="border-b border-gray-200 bg-[#F7F4ED] shadow-sm px-4 py-3">
      <div className="flex items-center justify-between w-full">
        {/* Logo + Hamburger container */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="\Medium.com-Logo.jpg"
              alt="Logo"
              className="h-6 w-auto"
            />
            <span className="text-lg font-semibold">Medium</span>
          </Link>

          {/* Hamburger icon for mobile */}
          <button
            className="md:hidden ml-auto flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop nav links */}
        <nav className="hidden md:flex md:items-center md:space-x-4">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 font-semibold text-base"
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="text-gray-600 hover:text-gray-900 font-semibold text-base"
          >
            Blogs
          </Link>
          <button className="text-gray-600 hover:text-gray-900 font-semibold text-base">
            Profile
          </button>
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center space-x-2">
          <Link to="/publish">
            <button
              type="button"
              className="whitespace-nowrap text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-1"
            >
              New
            </button>
          </Link>
          <User className="h-8 w-8 text-gray-600" />
          {!token ? (
            <Link to="/signup">
              <button className="text-gray-700 font-semibold text-base">
                Login
              </button>
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="text-gray-700 font-semibold text-base"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden  flex flex-col space-y-2 mt-3 items-center text-center">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 font-semibold text-base"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="text-gray-600 hover:text-gray-900 font-semibold text-base"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>
          <button
            className="text-gray-600 hover:text-gray-900 font-semibold text-base text-left"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </button>
          <div className="flex items-center text-center space-x-2 ">
            <Link to="/publish">
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-1"
                onClick={() => setIsOpen(false)}
              >
                New
              </button>
            </Link>
            <User className="h-8 w-8 text-gray-600" />
            {!token ? (
              <Link to="/signup">
                <button
                  className="text-gray-700 font-semibold text-base"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </button>
              </Link>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="text-gray-700 font-semibold text-base"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
