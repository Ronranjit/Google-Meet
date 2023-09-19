import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/7089160_google_meet_icon.png";

const Navbar = () => {
  return (
    <div className="bg-white">
      <header class="bg-[#FCF8F1] bg-opacity-30">
        <div class="px-4 mx-auto sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16 lg:h-20">
            <div class="flex-shrink-0 flex items-center gap-4 ">
              <a href="#" title="" class="flex ">
                <img class="w-14 h-14" src={logo} alt="logo" />
              </a>
              <h1 className="text-4xl font-primary font-bold text-gray-500">
                Meet
              </h1>
            </div>
            <div>
              <ul className="flex gap-5 text-2xl capitalize text-purple-500">
                <li className="btn btn-circle bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] r  group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt  text-white">
                  <Link to="/">home</Link>
                </li>
                <li className="btn btn-circle">
                  <Link to="/meeting">meeting</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
