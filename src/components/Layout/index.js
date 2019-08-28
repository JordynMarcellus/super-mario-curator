import React, { memo } from "react";
import { Box } from "grommet";
import { Header } from "../Header";

export const Layout = memo(({ children }) => {
  return (
    <Box>
      <Header />
      <Box pad={{ vertical: "large", horizontal: "xlarge" }}>{children}</Box>
    </Box>
  );
});
