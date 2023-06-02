import React, { useCallback, useEffect, useState } from "react";
import LinkedInAnchor from "../Shared/LinkedInAnchor";
import GitHubAnchor from "../Shared/GitHubAnchor";
import BlogAnchor from "../Shared/BlogAnchor";
import ResumeAnchor from "../Shared/ResumeAnchor";
import ContactAnchor from "../Shared/ContactAnchor";
import Link from "next/link";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Main = () => {
  const [showArrow, setShowArrow] = useState(true);

  const handleShadow = useCallback(() => {
    if (window.scrollY >= 500) {
      setShowArrow(false);
    } else {
      setShowArrow(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleShadow);
    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, [handleShadow]);

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">LET ME SOLVE YOUR PROBLEMS</p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]"> Jonas Burigo</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full Stack Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I specialize in building integrated solutions back to front
          </p>

          <div className="flex items-center justify-between max-w-[415px] m-auto py-4">
            <LinkedInAnchor />
            <GitHubAnchor />
            <BlogAnchor />
            <ContactAnchor />
            <ResumeAnchor />
          </div>
        </div>
      </div>
      {showArrow && (
        <div className="flex justify-center absolute bottom-20 w-full ">
          <div
            className="rounded-full animate-pulse shadow-lg shadow-gray-400 p-4 hover:scale-110 ease-in duration-300"
            title="See more"
          >
            <HiOutlineChevronDoubleDown className="text-[#5651e5]" size={30} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
