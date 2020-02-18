import React from "react";
import { Paper, Typography } from "@material-ui/core";

export default ({ video }) => {
  if (!video)
    return (
      <div>
        <h1>Please search for a video in the search bar above</h1>
      </div>
    );
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "27%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "17px" }}>
        <Typography variant="h5">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
};
