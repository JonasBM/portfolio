import Image, { StaticImageData } from "next/image";
import React from "react";
import Html from "#/public/assets/skills/html.png";
import Css from "#/public/assets/skills/css.png";
import Javascript from "#/public/assets/skills/javascript.png";
import ReactJS from "#/public/assets/skills/react.png";
import Github from "#/public/assets/skills/github.png";
import AWS from "#/public/assets/skills/aws.png";
import Django from "#/public/assets/skills/django.png";
import Docker from "#/public/assets/skills/docker.png";
import Mysql from "#/public/assets/skills/mysql.png";
import Postgres from "#/public/assets/skills/postgres.png";
import Nginx from "#/public/assets/skills/nginx.png";
import Node from "#/public/assets/skills/node.png";
import Python from "#/public/assets/skills/python.png";
import Typescript from "#/public/assets/skills/typescript.png";
import VirtualPage from "../VirtualPage";

type SkillIconProps = {
  label: string;
  icon: StaticImageData;
};

const SkillIcon: React.FC<SkillIconProps> = ({ label, icon }) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={icon} width="64" height="64" alt="/" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{label}</h3>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <VirtualPage sectionId="skills" title="Skills" description="What I Can Do">
      <div className="max-w-[1240px] m-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <SkillIcon label="AWS" icon={AWS} />
        <SkillIcon label="CSS" icon={Css} />
        <SkillIcon label="Django" icon={Django} />
        <SkillIcon label="Docker" icon={Docker} />
        <SkillIcon label="Github" icon={Github} />
        <SkillIcon label="HTML" icon={Html} />
        <SkillIcon label="javascript" icon={Javascript} />
        <SkillIcon label="MySQL" icon={Mysql} />
        <SkillIcon label="Nginx" icon={Nginx} />
        <SkillIcon label="Node" icon={Node} />
        <SkillIcon label="PostgreSQL" icon={Postgres} />
        <SkillIcon label="Python" icon={Python} />
        <SkillIcon label="React" icon={ReactJS} />
        <SkillIcon label="Typescript" icon={Typescript} />
      </div>
    </VirtualPage>
  );
};

export default Skills;
