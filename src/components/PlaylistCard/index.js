import React from "react";
import { Box, Button, Heading, Paragraph, Text } from "grommet";
import { Link } from "react-router-dom";

export const PlaylistCard = props => (
  <Box
    pad="medium"
    elevation="small"
    width="large"
    margin={{ vertical: "0", horizontal: "auto" }}
    key={props.playlist.uid}>
    <Heading level="2" margin={{ vertical: "small" }}>
      {props.playlist.playlistData.playlistName}
    </Heading>
    <Paragraph>{props.playlist.playlistData.playlistDescription}</Paragraph>
    <Text>Total courses: {props.playlist.courses.length}</Text>
    <Link to={`/playlists/${props.playlist.uid}`}>See playlist</Link>
  </Box>
);
