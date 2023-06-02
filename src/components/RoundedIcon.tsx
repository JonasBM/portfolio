import React from "react";

export interface RoundedIconProps {
  title?: string;
  children: React.ReactNode;
}

const RoundedIcon: React.FC<RoundedIconProps> = ({ title, children }) => {
  return (
    <div className="group">
      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-2xl">
        {children}
      </div>
      <div className="absolute mt-2 ml-[-30px] scale-0 group-hover:scale-100 z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 text-sm font-normal text-white">
        {title}
      </div>
    </div>
  );
};

export default RoundedIcon;
