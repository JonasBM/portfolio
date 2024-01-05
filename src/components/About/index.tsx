import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "#/public/assets/about.jpg";
import VirtualPage from "../VirtualPage";

const About = () => {
  return (
    <VirtualPage sectionId="about" title="About" description="Who I Am">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="py-2 text-gray-600">
            I&apos;m a Full Stack Developer with preference for backend. I work with Python/Django/DRF and
            Typescript/React. I enjoy learning and experimenting with new technologies
            (already experimented with C# (WPF desktop app), Java (Android app), PHP and a lot more).
          </p>

          <p className="py-2 text-gray-600">
            Love technology and have a home server running UnRAID, with numerous containers and VMs. I am an experienced
            professional, not limited to development alone, as professionalism extends across all areas of expertise. I
            am always seeking new challenges. Recently, I built a 3D printer by sourcing individual parts.
          </p>

          <p className="py-2 text-gray-600">
            My journey in web development began in 2014, initially as a hobby. During that time, I developed internal
            tools for the civil engineering office where I worked, and I was also responsible for the company&apos;s IT
            infrastructure. In 2020, I made the decision to transition to web development as a full-time career. I
            started with freelance projects and, in 2021, joined a company in Brazil where I currently work as a full
            stack developer.
          </p>

          <p className="py-2 text-gray-600">
            I excel at finding solutions and anticipating potential problems or bugs. While I have a preference for
            backend development, I can also create functional and visually appealing interfaces.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my projects.</p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </VirtualPage>
  );
};

export default About;
