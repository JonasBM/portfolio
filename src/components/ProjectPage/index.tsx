import Image from "next/image";
import React, { useEffect, useState } from "react";
import cryptoImg from "#/public/assets/projects/crypto.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import TechnologyItem from "@/components/Shared/TechnologyItem";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export interface ProjectPageProps {
  title: string;
  subtitle: string;
  CarouselData: Array<{ image: string }>;
  techs: Array<string>;
}

const ProjectPage: React.FC<React.PropsWithChildren<ProjectPageProps>> = ({
  title,
  subtitle,
  CarouselData,
  techs,
  children,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const [stop, setStop] = useState<boolean>(false);

  useEffect(() => {
    const autoSlider = setInterval(() => {
      if (paused === false && stop === false) {
        setCurrentSlide((prev) => {
          const newSlide = prev === CarouselData.length - 1 ? 0 : prev + 1;
          return newSlide;
        });
      }
    }, 3000);
    return () => {
      clearInterval(autoSlider);
    };
  }, [CarouselData.length, paused, stop]);

  const onMouseEnter = () => {
    setPaused(true);
  };

  const onMouseLeave = () => {
    setPaused(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const newSlide = prev === CarouselData.length - 1 ? 0 : prev + 1;
      return newSlide;
    });
    setStop(true);
  };

  const prevSlide = () => {
    console.log("sssss");
    setCurrentSlide((prev) => {
      const newSlide = prev === 0 ? CarouselData.length - 1 : prev - 1;
      return newSlide;
    });
    setStop(true);
  };

  return (
    <div className="w-full">
      <div className="h-20" />
      <div className="w-full h-[50vh] flex justify-center" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="">
          {CarouselData.map((slide, index) => {
            return (
              <Image
                key={index}
                src={slide.image}
                className={index === currentSlide ? "w-auto h-full" : "hidden"}
                width="0"
                height="0"
                sizes="100vw"
                style={{ objectFit: "cover" }}
                alt="/"
              />
            );
          })}
        </div>
        <div
          className="absolute z-20 top-[30vh] bg-white opacity-30 lg:transform lg:translate-x-[-460px] left-5 lg:left-auto"
          onClick={prevSlide}
        >
          <AiOutlineLeft className=" text-3xl text-black cursor-pointer" />
        </div>
        <div
          className="absolute z-20 top-[30vh] bg-white opacity-30 lg:transform lg:translate-x-[460px] right-5 lg:right-auto"
          onClick={nextSlide}
        >
          <AiOutlineRight className=" text-3xl text-black cursor-pointer" />
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid lg:grid-cols-5 gap-8 py-8">
        <div className="col-span-5 p-2">
          <h2 className="py-2 text-shadow">{title}</h2>
          <h3 className="text-shadow">{subtitle}</h3>
        </div>
        <div className="col-span-5 lg:col-span-4 p-2">{children}</div>
        <div className="col-span-5 lg:col-span-1 py-4">
          <div className="p-2 shadow-xl shadow-gray-400 rounded-xl">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 lg:grid-cols-1 ">
              {techs.map((tech, index) => {
                return <TechnologyItem key={index} label={tech} />;
              })}
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;
