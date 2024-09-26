import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ bagCount }) => {
  return (
    <header className="bg-blue-950 text-white p-2 flex items-center">
      <div className="flex justify-between items-center w-full px-3 py-2 sm:px-5 sm:py-3">
        <div className="text-lg font-bold sm:text-[16px]">Shopping Bag</div>

        <div className="flex items-center gap-2 sm:gap-[40px]">
          <nav className="space-x-2 flex items-center sm:space-x-4">
            <a href="/" className="text-sm hover:underline sm:text-base">
              Home
            </a>
            <a href="/" className="text-sm hover:underline sm:text-base">
              Products
            </a>
            <a href="/" className="text-sm hover:underline sm:text-base">
              Contact
            </a>
          </nav>
          <div className="flex-grow items-center justify-center sm:justify-start hidden sm:flex md:hidden lg:flex">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white text-black p-2 rounded w-full max-w-[150px] sm:max-w-xs"
            />
          </div>

          <Link to="/cart">
            <button className="relative p-2 rounded white bg-blue-900">
              <ShoppingCartIcon fontSize="small" className="text-white bg-blue-900" />
              {bagCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 rounded-full text-xs w-4 h-4 flex items-center justify-center sm:w-5 sm:h-5">
                  {bagCount}
                </span>
              )}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
