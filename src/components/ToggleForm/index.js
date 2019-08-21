import React from "react";
import { Layer, Box, Heading } from "grommet";

export const ToggleForm = props => (
  <Layer onEsc={props.toggleVisibility} onClickOutside={props.toggleVisibility}>
    <Box round="small" pad="large" width="large">
      <Heading level="2">{props.headline}</Heading>
      {props.children}
    </Box>
  </Layer>
);
