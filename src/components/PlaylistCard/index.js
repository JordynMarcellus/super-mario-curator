import React from "react";
import { Box, Heading, Paragraph, Text } from "grommet";
import { StyledLink } from "../../styles/styles";

export const PlaylistCard = props => (
  <Box
    pad="medium"
    elevation="small"
    width="large"
    margin={{ vertical: "0", horizontal: "auto" }}>
    <Heading level="2" margin={{ vertical: "small" }}>
      {props.playlist.playlistData.playlistName}
    </Heading>
    <Paragraph margin={{ top: "0", bottom: "small" }}>
      {props.playlist.playlistData.playlistDescription}
    </Paragraph>
    <Text margin={{ bottom: "small" }}>
      Total courses: {props.playlist.courses.length}
    </Text>
    <StyledLink to={`/playlists/${props.playlist.uid}`}>
      See playlist
    </StyledLink>
  </Box>
);
