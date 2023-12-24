import React from "react";
import { Link } from "react-scroll";
import { BiAperture } from "react-icons/bi";
import { SiDiscord } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";

const Header = () => {
  return (
    <nav className="bg-black text-white flex flex-row justify-between list-none pl-12 pr-12 items-center h-24 sticky top-0">
      {/* Left side */}
      <div className="flex gap-40">
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
          <li className="text-xl md:text-2xl flex items-center gap-3">
            <BiAperture className="text-2xl md:text-4xl text-goodAqua" /> Future
            NFT
          </li>
        </Link>

        <div className="lg:flex gap-12 text-lg hidden">
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
            <li className="hover:text-goodAqua cursor-pointer">Home</li>
          </Link>

          <Link to="nfts" spy={true} smooth={true} offset={-100} duration={500}>
            <li className="hover:text-goodAqua cursor-pointer">NFTs</li>
          </Link>

          <Link to="faq" spy={true} smooth={true} offset={-100} duration={500}>
            <li className="hover:text-goodAqua cursor-pointer">FAQ</li>
          </Link>
        </div>
      </div>
      {/* Right side */}
      <div className="flex items-center gap-12 ">
        <li className="text-3xl hover:text-goodAqua cursor-pointer md:block hidden">
          <SiDiscord />
        </li>
        <li className="text-2xl hover:text-goodAqua cursor-pointer md:block hidden">
          <BsTwitterX />
        </li>
        <button className="text-xs md:text-lg border rounded-full pl-3 pr-3 pt-2 pb-2  md:pl-5 md:pr-5 md:pt-2 md:pb-2 border-gray-600 hover:border-goodAqua">
          Launch App
        </button>
      </div>
    </nav>
  );
};

export default Header;
