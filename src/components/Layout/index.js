import React, { memo, useContext } from "react";
import { Box } from "grommet";
import { AuthenticationContext } from "../Authentication";
import { Header } from "../Header";

import { StyledLink } from "../../styles/styles";

export const Layout = memo(({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const { isLoggedIn } = user;
  return (
    <Box>
      <Header>
        <StyledLink to="/">Super Mario curator</StyledLink>
        {isLoggedIn ? (
          <StyledLink to="/login">Sign-out</StyledLink>
        ) : (
          <StyledLink to="/login">Login</StyledLink>
        )}
      </Header>
      {children}
    </Box>
  );
});
