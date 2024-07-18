import React, { CSSProperties } from "react";
import { ArticleResult, MediaMetadata } from "../../interfaces";
import { Grid, Paper, Stack, Typography } from "@mui/material";

// interfaces
interface articleSectionProps {
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
const ArticleSection: React.FC<articleSectionProps> = ({ articles }) => {
  return (
    <Grid container gap={5} sx={{ cursor: "pointer" }}>
      {articles?.length > 0 &&
        articles?.map((art) => {
          const data = art?.media?.[0]?.["media-metadata"]?.[2];

          return (
            <Grid item xs={12} key={art.id}>
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
interface gridItemImageProps {
  mediaData: MediaMetadata;
}
interface scriptItemProps {
  script: ArticleResult;
}

// media
const GridItemImage = ({ mediaData }: gridItemImageProps) => {
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
const GridItemScripts = ({ script }: scriptItemProps) => {
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
