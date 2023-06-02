import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";

interface TechnologyItemProps {
  label: string;
}
const TechnologyItem: React.FC<TechnologyItemProps> = ({ label }) => {
  return (
    <p className="text-gray-600 py-2 flex items-center">
      <RiRadioButtonFill className="pr-1" /> {label}
    </p>
  );
};

export default TechnologyItem;
