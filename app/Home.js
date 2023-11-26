import React from "react";
import Navbar from "./navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [bookmarkItems, setBookmarkItems] = useState([]);
  const router = useRouter();
  useEffect(() => {
    async function getNews() {
      const { data } = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f0b2761629514241a08cbbfbbbd85411"
      );
      console.log(data);
      setArticles(data.articles);
    }
    getNews();
  }, []);

  function bookmarkHandler(elem) {
    const data = JSON.parse(localStorage.getItem("bookmarkItem"));
    if (data) {
      let arr = [elem, ...data];
      localStorage.setItem("bookmarkItem", JSON.stringify(arr));
    } else {
      let data = [elem];
      localStorage.setItem("bookmarkItem", JSON.stringify(data));
    }
    alert("bookmarked");
  }
  return (
    <div>
      <div>
        <Navbar />
        <div className="flex flex-row flex-wrap justify-center">
          {articles &&
            articles.map((elem, index) => {
              return (
                <div
                  className="bg-white shadow-lg rounded mx-1 my-1 h-[480px] w-[300px] overflow-hidden"
                  key={index}
                >
                  <img src={elem?.urlToImage} className=" w-[300px] h-80" />
                  <div className="p-4  w-[300px] h-18 flex overflow-hidden">
                    <h4 className="font-bold text-sm mb-2 mx-1 ">
                      {elem.title}
                    </h4>
                    {localStorage.getItem("isLoggedIn") && (
                      <svg
                        width="60"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          bookmarkHandler(elem);
                        }}
                      >
                        <path
                          d="M5 3C4.44772 3 4 3.44772 4 4V21C4 21.2652 4.10536 21.5196 4.29289 21.7071C4.48043 21.8946 4.73478 22 5 22C5.11661 22 5.23122 21.984 5.341 21.9531L12 20L18.659 21.9531C18.7688 21.984 18.8834 22 19 22C19.2652 22 19.5196 21.8946 19.7071 21.7071C19.8946 21.5196 20 21.2652 20 21V4C20 3.44772 19.5523 3 19 3H5Z"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}

                    {/* <p className="text-gray-700 text-sm">description</p> */}
                  </div>
                  {localStorage.getItem("isLoggedIn") && (
                    <div>
                      <li
                        href="/details"
                        className="text-black px-3 my-1 mx-2 py-2 rounded-md text-sm font-medium list-none"
                        onClick={() => {
                          localStorage.setItem("news", JSON.stringify(elem));
                          router.push("/details");
                        }}
                      >
                        See More
                      </li>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
