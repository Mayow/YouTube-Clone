import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import { SearchBar, VideoList, VideoDetail } from "./components";

import youtube from "./api/youtube";

export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={5}>
          <Grid item xs={12} style={{ marginTop: "10px" }}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchTerm) {
    const {
      data: { items: videos }
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: "AIzaSyAn1K6865WNgj4KvFJsoixAbx_hJMMD-tA",
        q: searchTerm
      }
    });

    videos.forEach(function(item, index) {
      if (item.id.kind === "youtube#channel") {
        videos.splice(index, 1);
      }

      //decodes the title due to the &#39 special
      //chararcters that are received from the API call
      var parser = new DOMParser();
      var dom = parser.parseFromString(
        "<!doctype html><body>" + item.snippet.title,
        "text/html"
      );
      var decodedString = dom.body.textContent;
      item.snippet.title = decodedString;
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }
};
