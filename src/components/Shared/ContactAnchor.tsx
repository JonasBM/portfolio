import React from "react";
import RoundedIcon from "../RoundedIcon";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";

const ContactAnchor = () => {
  return (
    <Link href="/#contact">
      <RoundedIcon title="Lets talk, send a email">
        <AiOutlineMail />
      </RoundedIcon>
    </Link>
  );
};

export default ContactAnchor;
