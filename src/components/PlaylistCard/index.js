import React from "react";
import { Box, Heading } from "grommet";
import { StyledLink } from "../../styles/styles";

export const PlaylistCard = props => (
  <Box
    pad="medium"
    elevation="small"
    width="large"
    margin={{ vertical: "0", horizontal: "auto" }}>
    <Heading level="2" margin={{ vertical: "small" }}>
      {props.title}
    </Heading>
    {props.description}
    <StyledLink to={props.linkTo}>See playlist</StyledLink>
  </Box>
);
