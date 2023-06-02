import React from "react";
import ProjectPage from "@/components/ProjectPage";
import Paragraph from "@/components/Shared/Paragraph";

const CarouselData = [
  { image: "/assets/projects/inventory-control/inventory_1.png" },
  { image: "/assets/projects/inventory-control/inventory_2.png" },
  { image: "/assets/projects/inventory-control/inventory_3.png" },
  { image: "/assets/projects/inventory-control/inventory_4.png" },
  { image: "/assets/projects/inventory-control/inventory_5.png" },
];

const techs = [
  "Python",
  "Django",
  "Django Rest Framework",
  "Javascript",
  "React",
  "Bootstrap",
  "Redux",
  "PostgreSQL",
  "Tests",
];

const InventoryControl = () => {
  return (
    <ProjectPage
      title="Inventory Control"
      subtitle="Django / DRF / React JS / Bootstrap"
      CarouselData={CarouselData}
      techs={techs}
    >
      <p>Project Overview</p>
      <h2>November of 2021</h2>

      <Paragraph>This is a simple showcase of some solutions that I don&apos;t regularly use.</Paragraph>
      <Paragraph>The project was completed within a week for an interview.</Paragraph>
      <Paragraph>It includes:</Paragraph>
      <ul className="pl-20">
        <li className="list-disc">Comprehensive backend tests, and just a sample in the frontend.</li>
        <li className="list-disc">Bilingual options (BR and EN) in both the backend and frontend.</li>
      </ul>
      <br />
      <Paragraph>
        The project is a basic inventory control system designed for a vendor, within the constraints of the interview.
        It utilizes JavaScript, React, Redux, and Bootstrap (CSS only) in the frontend, as well as Python, Django, and
        DRF (Django Rest Framework) in the backend.
      </Paragraph>

      <a href="https://github.com/JonasBM/inventory_control" target="_blank" rel="noreferrer">
        <button className="button-styled px-8 py-2 mt-4 mr-8">Code</button>
      </a>
      {/* <a href="" target="_blank" rel="noreferrer">
            <button className="button-styled px-8 py-2 mt-4">Demo</button>
          </a> */}
    </ProjectPage>
  );
};

export default InventoryControl;
