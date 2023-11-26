"use client";
import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../navbar";
import { useRouter } from "next/navigation";

const Bookmark = () => {
  const router = useRouter();
  const [bookmarkedData, setBookmarkedData] = useState([]);
  useEffect(() => {
    setBookmarkedData(JSON.parse(localStorage.getItem("bookmarkItem")));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex justify-center flex-wrap">
        {bookmarkedData?.map((elem, index) => {
          return (
            <div
              className="bg-white shadow-lg rounded mx-1 my-1 h-[480px] w-[300px] overflow-hidden"
              key={index}
            >
              <img src={elem?.urlToImage} className=" w-[300px] h-80" />
              <div className="p-4  w-[300px] h-18 flex overflow-hidden">
                <h4 className="font-bold text-sm mb-2 mx-1 ">{elem.title}</h4>
                {/* <p className="text-gray-700 text-sm">description</p> */}
              </div>
              {localStorage.getItem("isLoggedIn") && (
                <div>
                  <li
                    className="text-black px-3 my-1 mx-2 py-2 rounded-md text-sm font-medium list-none cursor-pointer"
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
  );
};

export default Bookmark;
