import React from "react";
import ProjectPage from "@/components/ProjectPage";
import Paragraph from "@/components/Shared/Paragraph";

const CarouselData = [
  { image: "/assets/projects/process-control/process_1.png" },
  { image: "/assets/projects/process-control/process_2.png" },
  { image: "/assets/projects/process-control/process_3.png" },
  { image: "/assets/projects/process-control/process_4.png" },
  { image: "/assets/projects/process-control/process_5.png" },
  { image: "/assets/projects/process-control/process_6.png" },
  { image: "/assets/projects/process-control/process_7.png" },
];

const techs = ["Python", "Django", "Django Rest Framework", "Typescript", "React", "Bootstrap", "Redux", "PostgreSQL"];

const ProcessControl = () => {
  return (
    <ProjectPage
      title="Fire Hydrant Sizing"
      subtitle="Django / DRF / React JS / Bootstrap"
      CarouselData={CarouselData}
      techs={techs}
    >
      <p>Project Overview</p>
      <h2>May of 2021</h2>

      <Paragraph>This was an MVP developed for a local consumer protection agency.</Paragraph>
      <Paragraph>
        They needed a solution to manage their internal processes as they were currently using an Excel sheet, which
        presented multiple issues. I created an MVP to demonstrate a web application that effectively controls the
        processes, allowing for file attachments and communication.
      </Paragraph>
      <Paragraph>
        The project utilizes TypeScript, React, Redux, and the Bootstrap component library in the frontend. For the
        backend, it uses Python, Django, and DRF (Django Rest Framework).
      </Paragraph>
      <a href="https://github.com/JonasBM/procon_simplificado_api" target="_blank" rel="noreferrer">
        <button className="button-styled px-8 py-2 mt-4 mr-8">Backend Code</button>
      </a>
      <a href="https://github.com/JonasBM/procon_simplificado_react" target="_blank" rel="noreferrer">
        <button className="button-styled px-8 py-2 mt-4 mr-8">Frontend Code</button>
      </a>
      {/* <a href="" target="_blank" rel="noreferrer">
            <button className="button-styled px-8 py-2 mt-4">Demo</button>
          </a> */}
    </ProjectPage>
  );
};

export default ProcessControl;
