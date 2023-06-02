import React from "react";

const Paragraph: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <p className="indent-8 leading-relaxed py-1">{children}</p>;
};

export default Paragraph;
