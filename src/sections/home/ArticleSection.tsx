import React, { CSSProperties } from "react";
import { ArticleResult, MediaMetadata } from "../../interfaces";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// interfaces
interface ArticleSectionProps {
  articles: ArticleResult[];
}

// styles
const gridItemImageStyles: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const gridItemScripts: CSSProperties = {
  justifyContent: "end",
  gap: "15px",
  height: "100%",
};

// article section
const ArticleSection: React.FC<ArticleSectionProps> = ({ articles }) => {
  // navigate
  const navigate = useNavigate();

  // function
  const goToPage = (id: string) => {
    navigate(`/${id}`);
  };
  return (
    <Grid container gap={5}>
      {articles?.length > 0 &&
        articles?.map((art, index) => {
          const data = art?.media?.[0]?.["media-metadata"]?.[2];

          return (
            <Grid
              item
              xs={12}
              key={art.id}
              sx={{ cursor: "pointer" }}
              onClick={() => goToPage(art.id.toString())}
              data-testid={`article-index-${index}`}
            >
              <Paper variant="outlined">
                <Grid container spacing={2}>
                  <GridItemImage mediaData={data} />
                  <GridItemScripts script={art} />
                </Grid>
              </Paper>
            </Grid>
          );
        })}
    </Grid>
  );
};

// components

// interfaces
interface GridItemImageProps {
  mediaData: MediaMetadata;
}
interface ScriptItemProps {
  script: ArticleResult;
}

// media
const GridItemImage = ({ mediaData }: GridItemImageProps) => {
  return (
    <Grid item xs={12} md={5} sx={{ ...gridItemImageStyles }}>
      {mediaData?.url && (
        <img
          src={mediaData?.url}
          alt=""
          style={{
            maxWidth: mediaData?.width,
            maxHeight: mediaData?.height,
            borderRadius: "6px",
            width: "100%",
            height: "100%",
          }}
        />
      )}
    </Grid>
  );
};

// scripts
const GridItemScripts = ({ script }: ScriptItemProps) => {
  return (
    <Grid item xs={12} md={7}>
      <Stack sx={{ ...gridItemScripts }}>
        <Typography variant="h2">{script.title}</Typography>
        <Typography variant="body1">{script.abstract}</Typography>
      </Stack>
    </Grid>
  );
};
export default ArticleSection;
