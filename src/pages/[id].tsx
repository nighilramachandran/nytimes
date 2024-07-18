import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { LoadingBox } from "../components/loading-box";
import MotionViewport from "../components/animate/MotionViewport";
import { ArticleResult } from "../interfaces";
import DynamicPageTitle from "../sections/dynamic-page/Title";
import DynamicPageMedia from "../sections/dynamic-page/Media";
import AbstractDynamic from "../sections/dynamic-page/Abstract";

const DynamicPage: React.FC = () => {
  // use params
  const { id } = useParams();

  // states
  const [filteredArticle, setFilteredArticle] = useState<ArticleResult[]>();

  //selectors
  const { articles, status } = useAppSelector((state) => state.Article);

  // effects
  useEffect(() => {
    if (articles?.length) {
      let filteredArt = articles.filter(
        (artilce) => artilce.id === parseInt(id!)
      );
      setFilteredArticle(filteredArt);
    }
  }, [articles, id]);

  return (
    <Box component={MotionViewport}>
      <LoadingBox status={status === "data" ? "data" : "loading"}>
        {filteredArticle?.map((article) => {
          const mediaDataUrl = article.media?.[0]["media-metadata"]?.[2].url;
          return (
            <Stack spacing={4} key={article.id}>
              <DynamicPageTitle titles={article} />
              <DynamicPageMedia mediaurl={mediaDataUrl} />
              <AbstractDynamic abstract={article} />
            </Stack>
          );
        })}
      </LoadingBox>
    </Box>
  );
};

export default DynamicPage;
