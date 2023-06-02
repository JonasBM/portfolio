import React from "react";
import { FaGithub } from "react-icons/fa";
import RoundedIcon from "../RoundedIcon";

const GitHubAnchor = () => {
  return (
    <a href="https://github.com/Jonasbm" target="_blank" rel="noreferrer">
      <RoundedIcon title="Checkout my Github profile and repositories">
        <FaGithub />
      </RoundedIcon>
    </a>
  );
};

export default GitHubAnchor;
