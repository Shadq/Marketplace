import React from "react";

const News = () => {
  return (
    <div className="mt-44 hidden lg:flex justify-center" id="news">
      <div className="w-full ml-72 mr-72 h-24 pl-6 pr-6 bg-bannerBG bg-no-repeat bg-cover rounded-3xl flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">
          Futurist available now!
        </h1>
        <button className="text-xl md:text-md rounded-full pl-3 pr-3 pt-2 pb-2 md:pl-5 md:pr-5 md:pt-2 md:pb-2 bg-goodAqua text-black">
          See Collection
        </button>
      </div>
    </div>
  );
};

export default News;
