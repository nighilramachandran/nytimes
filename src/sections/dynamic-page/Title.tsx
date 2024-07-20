import { Stack, Typography } from "@mui/material";
import React from "react";
import { m } from "framer-motion";
import { varFade } from "../../components/animate/variants";
import { ArticleResult } from "../../interfaces";

// interface
interface titleProps {
  titles: ArticleResult;
}
const DynamicPageTitle: React.FC<titleProps> = ({ titles }) => {
  return (
    <>
      <m.div variants={varFade().inUp}>
        <Typography
          textAlign={"center"}
          variant="h2"
          color={"gradient"}
          data-testid="source-title"
        >
          {titles?.source}
        </Typography>
      </m.div>
      <m.div variants={varFade().inUp}>
        <Stack>
          <Typography
            variant="body2"
            data-testid="author"
          >{`- ${titles?.byline}`}</Typography>
          <Typography variant="body2" data-testid="publish-date">
            {titles?.published_date}
          </Typography>
          <Typography variant="h2" data-testid="sub-title">
            {titles?.title}
          </Typography>
        </Stack>
      </m.div>
    </>
  );
};

export default DynamicPageTitle;
