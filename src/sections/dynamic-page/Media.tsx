import React, { CSSProperties } from "react";
import { varFade } from "../../components/animate/variants";
import { m } from "framer-motion";

// interface
interface mediaProps {
  mediaurl: string;
}

// styles
const imageStyles: CSSProperties = {
  width: "100%",
  height: "100%",
  borderRadius: "6px",
};

const DynamicPageMedia: React.FC<mediaProps> = ({ mediaurl }) => {
  return (
    <>
      {mediaurl && (
        <m.div variants={varFade().inUp}>
          <img src={mediaurl} alt="" style={{ ...imageStyles }} />
        </m.div>
      )}
    </>
  );
};

export default DynamicPageMedia;
