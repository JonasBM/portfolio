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
            content="I'm a Full Stack Developer specializing in building exceptional digital experiences."
          />
          <link rel="icon" href="/fav.png" />
        </Head>

        <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
          <h2 className="text-center">Resume</h2>
          <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
            <h2 className="text-center">Jonas Burigo</h2>
            <div className="flex">
              <a href="https://www.linkedin.com/in/jonas-burigo/" target="_blank" rel="noreferrer">
                <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
              </a>
              <a href="https://github.com/Jonasbm/" target="_blank" rel="noreferrer">
                <FaGithub size={20} style={{ marginRight: "1rem" }} />
              </a>
              <a href="/assets/jonas_resume.pdf" target="_blank" rel="noreferrer">
                <FaPrint size={20} style={{ marginRight: "1rem" }} />
              </a>
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
          <p className="indent-5">
            With more than four years of hands-on experience in web development, I specialize in Django and React,
            demonstrating deep expertise and a strong ability to adapt to various project demands.
          </p>
          <p className="indent-5">
            My skills are further augmented by a solid proficiency in DevOps practices, underscored by an AWS
            certification, which equips me with the necessary tools to efficiently manage and scale projects.
          </p>
          <p className="indent-5">
            I am particularly proud of my track record in leading numerous projects from inception to deployment,
            showcasing my commitment to excellence, strong project management skills, and unwavering dedication to
            delivering high-quality results under tight deadlines.
          </p>

          {/* Skills */}
          <div className="text-center py-4">
            <h5 className="text-center underline text-[18px] py-2">Skills</h5>
            <p className="py-2">
              <span className="font-bold">Technical Skills</span>
              <span className="px-2">|</span>Full Stack Developer
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
              <span className="font-bold italic">Reckon Digital</span>
              <span className="px-2">|</span>London, UK
            </p>
            <p className="py-1 italic">Software engineer (2023 - Current)</p>
            <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
              <li>
                Assisted in transitioning a high-traffic online game from Python 2 to Python 3, updating 4 million lines of code.
              </li>
              <li>
                Improved Continuous Integration with TeamCity and Kotlin DSL.
              </li>
              <li>
                Developed and troubleshot desktop apps for Windows and MacOS.
              </li>
              <li>
                Contributed to web app development with Flask, enhancing functionality and user experience.
              </li>
              <li>
                Worked on Django-based applications, optimizing for robustness and scalability
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="py-6">
            <p className="italic">
              <span className="font-bold italic">PriceSurvey</span>
              <span className="px-2">|</span>Belo Horizonte, MG - Brazil
            </p>
            <p className="py-1 italic">Full Stack Developer (2022 - 2023)</p>
            <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
              <li>
                Orchestrated the development of a high-performance application designed to enhance quality assurance for surveys, using React and Django.
              </li>
              <li>
                Led the strategic redesign of the market research application, implementing an efficient queued system. This allowed for handling a larger volume of surveys and provided improved control over research processes.
              </li>
              <li>
                Ensured responsive UI layouts with HTML, CSS, React, and TypeScript.
              </li>
              <li>
                Responsible for the creation and maintenance of a high-performance backend RestAPI, demonstrating proficiency in SQL, Django, Django REST framework (DRF), Python, and AWS.
              </li>
              <li>
                Introduced automated testing, raising test coverage to nearly 90%.
              </li>
              <li>
                Spearheaded the database migration to PostgreSQL, boosting efficiency and scalability with GeoDjango support and enhanced queries.
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="py-6">
            <p className="italic">
              <span className="font-bold">Trichês Engenharia</span>
              <span className="px-2">|</span>Florianópolis, SC - Brazil
            </p>
            <p className="py-1 italic">Lead IT manager / Software engineer (2002 – 2021)</p>
            <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
              <li>
                Managed the IT infrastructure, encompassing both software and hardware components, ensuring optimal performance and reliability.
              </li>
              <li>
                Spearheaded strategic tech implementation, enhancing operational efficiency.
              </li>
              <li>
                Pioneered the development of innovative tooling for calculations and management, utilizing a tech stack that included MySQL, PHP, JavaScript, and jQuery, thereby improving operational workflows and data handling capabilities
              </li>
              <li>
                Transitioned from Windows to Linux servers, handling Active Directory, web server, and file server setups on Samba and Nginx.
              </li>
            </ul>
          </div>

          {/* Extra Experience */}
          <h5 className="text-center underline text-[18px] py-2">Freelance</h5>

          <div className="py-6" style={{ pageBreakBefore: "always" }}>
            <p className="py-1 italic">Full Stack Developer (2019 - Current)</p>
            <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
              <p>
                In 2019 I started taking freelance projects, improving my developing skills and building experience as a
                Full Stack Developer.
              </p>
              <li>2019: Contracted to develop a calendar solution to track events like notices and intimations.</li>
              <li>2020: Contracted to develop a MVP, showing a solution to a process control webapp.</li>
              <li>2021: Contracted by my previous employer to develop a fire hydrante sizing tool.</li>
              <li>2023: Add a new module for gas sizing in the project for fire hidrant sizing.</li>
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
