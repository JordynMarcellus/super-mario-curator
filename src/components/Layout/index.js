import React, { memo, useContext } from "react";
import { Box } from "grommet";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/playlists">Playlists</NavLink>
        <NavLink to="/user">Your info</NavLink>
        {isLoggedIn ? (
          <StyledLink to="/sign-out">Sign-out</StyledLink>
        ) : (
          <StyledLink to="/sign-in">Sign-in</StyledLink>
        )}
      </Header>
      <Box pad={{ vertical: "large", horizontal: "xlarge" }}>{children}</Box>
    </Box>
  );
});
