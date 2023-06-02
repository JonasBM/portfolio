import React from "react";
import ProjectPage from "@/components/ProjectPage";
import Paragraph from "@/components/Shared/Paragraph";

const CarouselData = [
  { image: "/assets/projects/calculo/calculo_1.png" },
  { image: "/assets/projects/calculo/calculo_2.png" },
  { image: "/assets/projects/calculo/calculo_3.png" },
  { image: "/assets/projects/calculo/calculo_4.png" },
  { image: "/assets/projects/calculo/calculo_5.png" },
];

const techs = [
  "Python",
  "Django",
  "Django Rest Framework",
  "Typescript",
  "React",
  "Material UI",
  "Redux",
  "PostgreSQL",
];

const Calculo = () => {
  return (
    <ProjectPage
      title="Fire Hydrant Sizing"
      subtitle="Django / DRF / React JS / Material UI"
      CarouselData={CarouselData}
      techs={techs}
    >
      <p>Project Overview</p>
      <h2>April of 2022</h2>

      <Paragraph>This project was created for my previous employer. It is a fire hydrant sizing app.</Paragraph>
      <Paragraph>
        The user enters the configuration of the fire hydrant system (paths, piping caracteristics, etc), and the
        program calculates the necessary parameters (heigh, pump, flow, speed, pressure, etc).
      </Paragraph>
      <Paragraph>
        The administration part allows for the registration of different types of pipes, materials, and fire hydrants.
        This enables quick changes to the system characteristics without manually modifying the information required for
        the calculations.
      </Paragraph>
      <Paragraph>
        The calculations are performed in the backend. It is a highly complex calculation due to the iterative nature of
        the system, where the pressure depends on the pressure drop, the pressure drop depends on the flow, and the flow
        depends on the pressure.
      </Paragraph>
      <Paragraph>
        The calculation module was developed in a deterministic mode while limiting the number of iterations to
        preventthe calculation from becoming stagnant.
      </Paragraph>
      <a href="https://github.com/JonasBM/engenharia" target="_blank" rel="noreferrer">
        <button className="button-styled px-8 py-2 mt-4 mr-8">Code</button>
      </a>
      {/* <a href="" target="_blank" rel="noreferrer">
            <button button-styled className="px-8 py-2 mt-4">Demo</button>
          </a> */}
    </ProjectPage>
  );
};

export default Calculo;
