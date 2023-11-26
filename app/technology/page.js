"use client";
import React from "react";
import Navbar from "../navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const Technology = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function getNews() {
      const { data } = await axios.get(
        "https://newsapi.org/v2/everything?q=technology&from=2023-11-24&to=2023-11-24&sortBy=popularity&apiKey=f0b2761629514241a08cbbfbbbd85411"
      );
      console.log(data);
      setArticles(data.articles);
    }
    getNews();
  }, []);
  return (
    <div>
      <div>
        <Navbar />
        <div className="flex flex-row flex-wrap justify-center">
          {articles &&
            articles.map((elem, index) => {
              return (
                <div
                  className="bg-white shadow-lg rounded mx-1 my-1 h-full overflow-hidden"
                  key={index}
                >
                  <img src={elem?.urlToImage} className="w-72 h-80" />
                  <div className="p-4 w-60 h-16">
                    <h4 className="font-bold text-sm mb-2 ">{elem.title}</h4>
                    {/* <p className="text-gray-700 text-sm">description</p> */}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Technology;
