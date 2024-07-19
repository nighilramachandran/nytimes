import { Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { LoadingBox } from "../components/loading-box";
import MotionViewport from "../components/animate/MotionViewport";
import { ArticleResult } from "../interfaces";
import DynamicPageTitle from "../sections/dynamic-page/Title";
import DynamicPageMedia from "../sections/dynamic-page/Media";
import AbstractDynamic from "../sections/dynamic-page/Abstract";
import { ROUTES } from "../utils/constants/routes";

const DynamicPage: React.FC = () => {
  // constants
  const { PAGE_NOT_FOUND } = ROUTES;
  // use params
  const { id } = useParams();

  // states
  const [filteredArticle, setFilteredArticle] = useState<ArticleResult[]>();

  //selectors
  const { articles, validPagesId, status } = useAppSelector(
    (state) => state.Article
  );

  // navigator
  const navigate = useNavigate();

  // effects
  useEffect(() => {
    if (validPagesId.length === 0 || !validPagesId.includes(parseInt(id!))) {
      navigate(PAGE_NOT_FOUND);
    }
    if (articles?.length) {
      let filteredArt = articles.filter(
        (artilce) => artilce.id === parseInt(id!)
      );
      setFilteredArticle(filteredArt);
    }
  }, [articles, id, validPagesId, navigate, PAGE_NOT_FOUND]);

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
