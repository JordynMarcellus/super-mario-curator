import React from "react";
import { Box } from "grommet";

export const CardWrapper = ({ children }) => (
  <Box
    direction="row"
    wrap={true}
    margin={{ vertical: "medium", horizontal: "0" }}>
    {children}
  </Box>
);
