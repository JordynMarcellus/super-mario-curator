import React from "react";
import { Box, Heading, Paragraph, Text } from "grommet";

export const PlaylistCard = props => (
  <Box pad="small " elevation="small" width="large" key={props.playlist.uid}>
    <Heading level="2" margin={{ vertical: "small" }}>
      {props.playlist.playlistData.playlistName}
    </Heading>
    <Paragraph>{props.playlist.playlistData.playlistDescription}</Paragraph>
    <Text>Total courses: {props.playlist.courses.length}</Text>
  </Box>
);
