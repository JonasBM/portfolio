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
      <div className="w-screen h-[50vh] relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="absolute top-0 left-0 w-full h-[50vh]  z-10" />

        <div className="absolute z-1 w-full h-[50vh] pt-20 flex justify-center">
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
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2">
          <h2 className="py-2 text-shadow">{title}</h2>
          <h3 className="text-shadow">{subtitle}</h3>
        </div>
        <AiOutlineLeft
          onClick={prevSlide}
          className="absolute z-20 left-20 text-3xl inset-y-1/2 text-black cursor-pointer"
        />
        <AiOutlineRight
          onClick={nextSlide}
          className="absolute z-20 right-20 text-3xl inset-y-1/2 text-black cursor-pointer"
        />
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">{children}</div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
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
