import React, { memo } from "react";
import { Box } from "grommet";
import { Header } from "../Header";

export const Layout = memo(props => {
  return (
    <>
      <Header />
      <Box
        as="main"
        pad={{ vertical: "large", horizontal: "xlarge" }}
        {...props}>
        {props.children}
      </Box>
    </>
  );
});
