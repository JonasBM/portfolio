import React from "react";
import { FaBlog } from "react-icons/fa";
import RoundedIcon from "../RoundedIcon";

const BlogAnchor = () => {
  return (
    <a href="https://blog.jonasburigo.com/" target="_blank" rel="noreferrer">
      <RoundedIcon title="Read some of my posts in my blog">
        <FaBlog />
      </RoundedIcon>
    </a>
  );
};

export default BlogAnchor;
