import React, { CSSProperties } from "react";
import { varFade } from "../../components/animate/variants";
import { m } from "framer-motion";

// interface
interface MediaProps {
  mediaurl: string;
}

// styles
const imageStyles: CSSProperties = {
  width: "100%",
  height: "100%",
  borderRadius: "6px",
};

const DynamicPageMedia: React.FC<MediaProps> = ({ mediaurl }) => {
  return (
    <>
      {mediaurl && (
        <m.div variants={varFade().inUp}>
          <img
            src={mediaurl}
            alt=""
            style={{ ...imageStyles }}
            data-testid="image"
          />
        </m.div>
      )}
    </>
  );
};

export default DynamicPageMedia;
