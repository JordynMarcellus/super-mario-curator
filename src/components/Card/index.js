import React from "react";
import { Box, Heading } from "grommet";
import { StyledLink } from "../../styles/styles";

export const Card = props => (
  <Box pad="medium" elevation="small" flex="grow" margin="small" width="medium">
    <Heading level="2" margin={{ vertical: "small" }}>
      {props.title}
    </Heading>
    {props.description}
    <StyledLink to={props.linkTo}>Learn more</StyledLink>
  </Box>
);
