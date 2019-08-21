import React from "react";
import { Layer, Box } from "grommet";
export const ToggleForm = props => (
  <Layer onEsc={props.toggleVisibility} onClickOutside={props.toggleVisibility}>
    <Box pad="large">{props.children}</Box>
  </Layer>
);
