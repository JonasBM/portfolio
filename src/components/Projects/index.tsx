import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "#/public/assets/projects/property.jpg";
import cryptoImg from "#/public/assets/projects/crypto.jpg";
import netflixImg from "#/public/assets/projects/netflix.jpg";
import twitchImg from "#/public/assets/projects/twitch.jpg";

import ProjectItem from "@/components/ProjectItem";
import VirtualPage from "../VirtualPage";

const Projects = () => {
  return (
    <VirtualPage sectionId="projects" title="Projects" description="What I've Built">
      <div className="max-w-[1240px] mx-auto px-2">
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Inventory Control - Showcase"
            backgroundImg="/assets/projects/inventory-control/inventory_1.png"
            projectUrl="/inventory-control"
            tech="Django | React JS"
          />
          <ProjectItem
            title="Fire Hydrant Sizing"
            backgroundImg="/assets/projects/calculo/calculo_1.png"
            projectUrl="/calculo"
            tech="Django | React JS"
          />
          <ProjectItem
            title="Process Control"
            backgroundImg="/assets/projects/process-control/process_1.png"
            projectUrl="/process-control"
            tech="Django | React JS"
          />
          <ProjectItem
            title="Notice and Intimations Calendar"
            backgroundImg="/assets/projects/event-tracker/event_1.png"
            projectUrl="/event-tracker"
            tech="Django | React JS"
          />

          {/* <ProjectItem title="Property Finder" backgroundImg={propertyImg} projectUrl="/property" tech="React JS" /> */}
          {/* <ProjectItem title="Crypto App" backgroundImg={cryptoImg} projectUrl="/crypto" tech="React JS" /> */}
          {/* <ProjectItem title="Netflix App" backgroundImg={netflixImg} projectUrl="/netflix" tech="React JS" /> */}
          {/* <ProjectItem title="Twitch UI" backgroundImg={twitchImg} projectUrl="/twitch" tech="Next JS" /> */}
        </div>
      </div>
    </VirtualPage>
  );
};

export default Projects;
