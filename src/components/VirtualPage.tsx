import React from "react";

export interface VirtualPageProps {
  sectionId: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

const VirtualPage: React.FC<VirtualPageProps> = ({ sectionId, title, description, children }) => {
  return (
    <div id={sectionId} className="w-full p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto mt-24">
        <div>
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">{title}</p>
          <h2 className="py-4">{description}</h2>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default VirtualPage;
