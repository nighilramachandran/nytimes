import React from "react";
import { ArticleResult } from "../../interfaces";
import { m } from "framer-motion";
import { varFade } from "../../components/animate/variants";
import { Typography } from "@mui/material";

// interface
interface abstractProps {
  abstract: ArticleResult;
}

const AbstractDynamic: React.FC<abstractProps> = ({ abstract }) => {
  return (
    <m.div variants={varFade().inUp}>
      <Typography variant="body1" data-testid="abstract">
        {abstract.abstract}
      </Typography>
    </m.div>
  );
};

export default AbstractDynamic;
