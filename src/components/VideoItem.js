import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

export default ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{
          cursor: "pointer",
          border: "thick silver solid",
          margin: "auto",
          textAlign: "center",
          padding: "5px"
        }}
        onClick={() => onVideoSelect(video)}
      >
        <figure>
          <img
            style={{
              marginRight: "20px",
              maxWidth: "100%",
              maxHeight: "100%"
            }}
            alt="thumbnail"
            src={video.snippet.thumbnails.medium.url}
          />
        </figure>

        <figcaption>
          <Typography variant="subtitle1" style={{ fontSize: ".7em" }}>
            <b>{video.snippet.title}</b>
          </Typography>
        </figcaption>
      </Paper>
    </Grid>
  );
};
