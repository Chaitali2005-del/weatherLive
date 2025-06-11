import React from "react";

const newsData = [
  {
    date: "19th Jan, 2022",
    title: "One Of The Daily Rituals I Often Find Myself Doing",
    image: "/assets/img1.png",
  },
  {
    date: "19th Jan, 2022",
    title: "Some Parts Of The State Saw Scant Relief, As Downtown",
    image: "/assets/img2.png",
  },
  {
    date: "19th Jan, 2022",
    title: "Cold Weather Alert Issued As Temperatures Set To Plummet",
    image: "/assets/img3.png",
  },
];

export default function Necards() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-10 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">
          Weather Forecast News
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Bibendum
          Cursus Quis
        </p>
        <p className="text-gray-500 text-sm">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Quis
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:scale-105"
          >
            <div className="p-4 pt-5">
              <img
                src={news.image}
                alt="news"
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="text-center mt-4">
                <p className="text-sm text-gray-400">{news.date}</p>
                <h3 className="text-md font-medium text-gray-800 mt-2 mb-4">
                  {news.title}
                </h3>
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="mt-10 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
        Read More
      </button>
    </div>
  );
}
