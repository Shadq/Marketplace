import React from "react";
import nft1 from "../assets/nft1.jpeg";
import nft4 from "../assets/nft4.png";

const Hero = () => {
  return (
    <div className="text-white mt-24 h-[calc(100%-12rem)]" id="hero">
      <div className="flex flex-col gap-6 justify-center items-center text-center">
        <h1 className="text-3xl md:text-7xl">
          Sell, discover and <br /> obtain futuristic NFTs
        </h1>
        <span className="text-md md:text-xl text-gray-400">
          Future NFT is home to the world's best NFTs
        </span>
        <div className="flex gap-4">
          <button
            className="text-md md:text-m
          d rounded-full pl-3 pr-3 pt-2 pb-2 md:pl-5 md:pr-5 md:pt-2 md:pb-2 bg-goodRed text-black"
          >
            Launch App
          </button>
          <button className="text-md md:text-md rounded-full pl-3 pr-3 pt-2 pb-2 md:pl-5 md:pr-5 md:pt-2 md:pb-2 bg-goodAqua text-black">
            View NFTs
          </button>
        </div>
      </div>
      <div className="mt-28 h-[calc(100%-16.3rem)] flex gap-32 md:flex justify-center md:gap-56 items-center ">
        <img src={nft1} alt="nft" className="h-56 object-contain rounded-xl" />
        <img
          src={nft4}
          alt="nft"
          className="h-56 object-contain rounded-xl hidden md:block"
        />
      </div>
    </div>
  );
};

export default Hero;
