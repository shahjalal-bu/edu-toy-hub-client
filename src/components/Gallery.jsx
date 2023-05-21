import React from "react";

const Gallery = () => {
  const recentlyBoughtItems = [
    {
      src: "https://m.media-amazon.com/images/I/A1rvgkCpE7L._AC_SL1500_.jpg",
    },
    {
      src: "https://m.media-amazon.com/images/I/71xq1mHXn4L._AC_SL1500_.jpg",
    },
    {
      src: "https://m.media-amazon.com/images/I/91vNjG1UGaL._AC_SX679_.jpg",
    },
    {
      src: "https://m.media-amazon.com/images/I/91sBZ3bdAxL._AC_SL1500_.jpg",
    },
    {
      src: "https://m.media-amazon.com/images/I/81c7zp1qaxL._AC_SL1500_.jpg",
    },
    {
      src: "https://i5.walmartimages.com/asr/1f653cda-6c66-4535-886a-93caf9df56c6_1.991c91b4e28f030a53fc263da9ebe60a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    },
    {
      src: "https://m.media-amazon.com/images/I/819C5xf1+SL._AC_SL1500_.jpg",
    },
    {
      src: "https://m.media-amazon.com/images/I/91sBZ3bdAxL._AC_SL1500_.jpg",
    },
    {
      src: "https://m.media-amazon.com/images/I/91fLD7uWcaL._AC_SL1500_.jpg",
    },
    {
      src: "https://m.media-amazon.com/images/I/91u0lbANF-L._AC_SX679_.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-5 sm:px-20">
      <h2 className="text-3xl font-bold mb-4">Recently Sold Toys</h2>
      <div className="grid grid-cols-5">
        {recentlyBoughtItems.map((el, index) => (
          <div
            key={index}
            className={`p-2 m-1 rounded-sm shadow-sm shadow-slate-300 ring-2 ${
              index % 2 === 0 ? "ring-purple-200" : "ring-pink-300"
            }`}
          >
            <img className="aspect-square" src={el?.src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
