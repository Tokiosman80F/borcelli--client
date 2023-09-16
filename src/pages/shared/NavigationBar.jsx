import React from "react";
import {
  FaFacebookF,
  FaFileArrowUp,
  FaHeart,
  FaInstagram,
  FaLock,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
const NavigationBar = () => {
  return (
    <>
      {/* icons */}
      <div className="bg-neutral-200 flex justify-between px-52 py-2 text-gray-400">
        {/* left */}
        <div className="flex items-center gap-3 ">
          <Link>
            <FaFacebookF className="  hover:text-black"></FaFacebookF>
          </Link>
          <Link>
            <FaInstagram className="  hover:text-black"></FaInstagram>
          </Link>
          <Link>
            <FaTwitter className=" hover:text-black"></FaTwitter>
          </Link>
          <Link>
            <FaYoutube className=" hover:text-black"></FaYoutube>
          </Link>
        </div>
        {/* right */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2">
            <FaFileArrowUp className="text-orange-500"></FaFileArrowUp> <span className="hover:text-black">Submit Recipe</span>
      
          </button>
          <button className="flex items-center gap-2">
            <FaHeart className="text-orange-500"></FaHeart> <span className="hover:text-black">Saved Recipe</span>
          </button>
          <button className="flex items-center gap-2">
            <FaLock className="text-orange-500"></FaLock> <span className="hover:text-black">Login</span>
          </button>
        </div>
      </div>
      {/* brands */}
      <div className="h-20 flex items-center justify-center gap-4 my-5">
        <img src={logo} className="w-11 text " /><span className="text-4xl ">BORCELLI</span> 
      </div>
      {/* navbar */}
      <div></div>
    </>
  );
};

export default NavigationBar;
