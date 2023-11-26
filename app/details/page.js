"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../navbar";

const Details = () => {
  const route = useRouter();
  const [news, setNews] = useState({});
  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      route.push("/");
    }
    setNews(JSON.parse(localStorage.getItem("news")));
  }, []);
  console.log(news);
  return (
    <>
      <Navbar />
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          {news?.urlToImage && (
            <div>
              <img
                className="h-96 w-full object-cover md:h-[500px] md:w-[700px]"
                src={news.urlToImage}
                alt="News"
              />
            </div>
          )}

          <div className="p-8  md:flex-1">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {news?.title}
            </div>
            <a
              href={news?.url}
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {news?.description}
            </a>
            <p className="mt-2 my-2 text-gray-500">{news?.content}</p>
            <p className="text-gray-600 my-4">Author: {news?.author}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
