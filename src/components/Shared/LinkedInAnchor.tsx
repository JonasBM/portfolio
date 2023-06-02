import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import RoundedIcon from "../RoundedIcon";

const LinkedInAnchor = () => {
  return (
    <a href="https://www.linkedin.com/in/jonas-burigo-047aa8129/" target="_blank" rel="noreferrer">
      <RoundedIcon title="Give a look in my LinkedIn profile">
        <FaLinkedinIn />
      </RoundedIcon>
    </a>
  );
};

export default LinkedInAnchor;
