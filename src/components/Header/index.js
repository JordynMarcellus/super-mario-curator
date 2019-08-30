import React, { useContext } from "react";
import { Box } from "grommet";
import { AuthenticationContext } from "../Authentication";
import { StyledNavLink, StyledLink } from "../../styles/styles";

export const Header = props => {
  const { user } = useContext(AuthenticationContext);
  const { isLoggedIn, userInfo } = user;
  return (
    <Box
      tag="header"
      background="brand"
      pad={{
        left: "medium",
        right: "small",
        vertical: "large",
      }}
      elevation="medium"
      style={{ zIndex: "1" }}>
      <Box tag="nav" direction="row" align="center">
        <Box direction="row" justify="between" width="100%">
          <StyledLink to="/">Home</StyledLink>
          <StyledNavLink to="/courses">Courses</StyledNavLink>
          <StyledNavLink to="/playlists">Playlists</StyledNavLink>
          {isLoggedIn ? (
            <>
              <StyledNavLink to={`/user/${userInfo.uid}`}>
                Your info
              </StyledNavLink>
              <StyledLink to="/sign-out">Sign-out</StyledLink>
            </>
          ) : (
            <StyledLink to="/sign-in">Sign-in</StyledLink>
          )}
        </Box>
      </Box>
    </Box>
  );
};
