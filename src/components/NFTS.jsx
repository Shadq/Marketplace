import React from "react";
import { FaEthereum } from "react-icons/fa";
import nfts from "../nfts";

const NFTS = () => {
  return (
    <div className="mt-44" id="nfts">
      <div className="flex justify-center flex-col items-center text-center xl:ml-72 xl:mr-72 ">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-7xl font-semibold text-white">
            Top collections since <br />
            this month
          </h1>
          <span className="text-md md:text-xl text-gray-400">
            Discover this month's top collections on Future NFT
          </span>
        </div>
        <div className="mt-11 flex flex-col md:grid md:grid-cols-2 gap-12">
          {nfts.map((nft) => (
            <div className="text-white pt-5 pb-5 md:pt-0 md:pb-0 flex flex-col md:flex-row transition ease-out delay-150 hover:bg-zinc-700 rounded-xl cursor-pointer">
              <img
                src={nft.img}
                alt="nft"
                className="h-36 md:h-40 object-contain rounded-xl"
              />

              <div className="flex flex-col justify-center md:ml-7 gap-3 ">
                <h2 className="text-lg lg:text-xl">{nft.name}</h2>
                <div className="flex gap-8 justify-center text-gray-400 ">
                  <span className="flex items-center text-sky-500 text-sm lg:text-base">
                    <FaEthereum /> {nft.eth_price}
                  </span>
                  <span className="text-green-500 text-sm lg:text-base">
                    {nft.usd_price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NFTS;
