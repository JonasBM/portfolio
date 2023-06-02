import React from "react";
import RoundedIcon from "../RoundedIcon";
import Link from "next/link";
import { BsFillPersonLinesFill } from "react-icons/bs";

const ResumeAnchor = () => {
  return (
    <Link href="/resume">
      <RoundedIcon title="See my resume">
        <BsFillPersonLinesFill />
      </RoundedIcon>
    </Link>
  );
};

export default ResumeAnchor;
