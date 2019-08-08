import React from "react";
import { Box } from "grommet";

export const Header = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{
      left: "medium",
      right: "small",
      vertical: "large",
    }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);
