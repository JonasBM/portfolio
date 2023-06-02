import React, { useRef } from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn, FaPrint } from "react-icons/fa";
import ReactToPrint, { useReactToPrint } from "react-to-print";

const Resume = () => {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef?.current,
  });

  return (
    <>
      <div ref={componentRef}>
        <Head>
          <title>Jonas | Resume</title>
          <meta
            name="description"
            content="I'm a FullStack web developer specializing in building exceptional digital experiences."
          />
          <link rel="icon" href="/fav.png" />
        </Head>

        <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
          <h2 className="text-center">Resume</h2>
          <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
            <h2 className="text-center">Jonas Burigo</h2>
            <div className="flex">
              <a href="https://www.linkedin.com/in/jonas-burigo-047aa8129/" target="_blank" rel="noreferrer">
                <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
              </a>
              <a href="https://github.com/Jonasbm" target="_blank" rel="noreferrer">
                <FaGithub size={20} style={{ marginRight: "1rem" }} />
              </a>
              <button onClick={handlePrint}>
                <FaPrint size={20} style={{ marginRight: "1rem" }} />
              </button>
            </div>
          </div>
          <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
            <div className="hidden sm:block">
              <p>
                Web Development <span className="px-1">|</span> Complex Problem Solving
              </p>
            </div>
            <div className="block sm:hidden">
              <p>Proven Leadership</p>
              <p className="py-2">Web Development</p>
              <p>Complex Problem Solving</p>
            </div>
          </div>
          <p>
            Analytical, innovative, and motivated web development professional with experience, and organizational
            effectiveness in fast-paced and challenging environments. Adept at developing strategies and driving
            streamlined operations. Diverse analytical skills, team collaboration, and relationship building. Consummate
            professional with solid interpersonal abilities and complex problem-solving skills. Effective and proven
            track record of critical thinking, idea generation, and optimizing efficiencies.
          </p>

          {/* Skills */}
          <div className="text-center py-4">
            <h5 className="text-center underline text-[18px] py-2">Skills</h5>
            <p className="py-2">
              <span className="font-bold">Technical Skills</span>
              <span className="px-2">|</span>Full Stack Web Developer
              <span className="px-2">|</span>HTML
              <span className="px-2">|</span>CSS
              <span className="px-2">|</span>Javascript
              <span className="px-2">|</span>Typescript
              <span className="px-2">|</span>React
              <span className="px-2">|</span>Redux
              <span className="px-2">|</span>Material-UI
              <span className="px-2">|</span>Bootstrap
              <span className="px-2">|</span>Python
              <span className="px-2">|</span>Django
              <span className="px-2">|</span>Django Rest Framework
              <span className="px-2">|</span>MySQL
              <span className="px-2">|</span>PostgreSQL
              <span className="px-2">|</span>Docker
              <span className="px-2">|</span>AWS
            </p>
            <p className="py-2">
              <span className="font-bold">Amazon Web Services</span>
              <span className="px-2">|</span>Amazon Web Services Cloud Practitioner
            </p>
          </div>

          <h5 className="text-center underline text-[18px] py-4">Professional Experience</h5>
          {/* Experience */}
          <div className="py-6">
            <p className="italic">
              <span className="font-bold italic">PriceSurvey</span>
              <span className="px-2">|</span>Belo Horizonte, MG - Brazil
            </p>
            <p className="py-1 italic">Full Stack Web Developer (2022 - Current)</p>
            <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
              <li>
                Develop internal solutions and tools, taking into account the needs of the differente departaments.
              </li>
              <li>Troubleshoot issues and concerns and design changes as needed.</li>
              <li>
                Ensured comprehensive responsive UI layouts. With understanding of HTML, CSS, React and Typescript.
              </li>
              <li>
                Ensured performatic and well writen backend RestAPI. With understanding of SQL, Django, DRF and Python.
              </li>
              <li>Create automated tests for the backend.</li>
              <li>Adapt the backend RestAPI with good pratices for Django and DRF.</li>
            </ul>
          </div>

          {/* Experience */}
          <div className="py-6" style={{ pageBreakBefore: "always" }}>
            <p className="italic">
              <span className="font-bold italic">Freelance</span>
              <span className="px-2">|</span>Brazil
            </p>
            <p className="py-1 italic">Full Stack Web Developer (2020 - Current)</p>
            <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
              <li>
                In 2020 I started taking freelance projects, improving my developing skills and building experience as a
                Full Stack Web Developer.
              </li>
              <li>In 2020 contracted to develop a calendar solution to track events like notices and intimations.</li>
              <li>In 2021 contracted to develop a MVP, showing a solution to a process control webapp.</li>
              <li>In 2021 contracted by my previous employer to develop a fire hydrante sizing tool.</li>
            </ul>
          </div>

          <h5 className="text-center underline text-[18px] py-4">Other Professional Experience</h5>

          {/* Extra Experience */}
          <div className="py-6">
            <p className="italic">
              <span className="font-bold">Trichês Engenharia</span>
              <span className="px-2">|</span>Florianópolis, SC - Brazil
            </p>
            <p className="py-1 italic">Civil Engineer / IT manager / Software Developer / Associate (2012 – 2022)</p>
            <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
              <li>Design fire prevention and hidraulic plans.</li>
              <li>Create designs using AutoCad and Revit.</li>
              <li>Strategic implementation of new technologies.</li>
              <li>Manage the IT infrastructure (software and hardware).</li>
              <li>Handled network installation in the office.</li>
              <li>
                Server Manager, starting with a Windows Server OS and later migrating to a Linux-based one, including
                Active Directory, web server, and file server.
              </li>
              <li>Provided IT support.</li>
              <li>Perform repair technician duties.</li>
            </ul>
          </div>

          <h5 className="text-center underline text-[18px] py-2">Hobbies</h5>

          {/* Hobby */}
          <div className="py-1">
            <p className="italic">
              <span className="font-bold">Personal Server</span>
            </p>
            <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
              <li>Manage a Linux server (UnRAID).</li>
              <li>Multi purpose docker containers for personal use and professional development.</li>
              <li>Windows VM with hardware passtrough to play games.</li>
            </ul>
          </div>

          {/* Hobby */}
          <div className="py-1">
            <p className="italic">
              <span className="font-bold">3d Printing</span>
            </p>
            <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
              <li>Built a simple Reprap Prusa i3 from sourced materials (DIY).</li>
              <li>Upgraded to a Voron Trident using my old Prusa i3 (to print parts) and sourced materials (DIY).</li>
              <li>Configure the 3d printer firmware (Marlin and Klipper).</li>
              <li>Designed simple objects using Fusion 360.</li>
            </ul>
          </div>

          {/* Hobby */}
          <div className="py-1">
            <p className="italic">
              <span className="font-bold">Home automation</span>
            </p>
            <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
              <li>Light automation in my old appartament.</li>
              <li>Adapt light switchs with a relay and a ESP8266.</li>
              <li>Manage the automation trough Home Assistant.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </>
  );
};

export default Resume;
