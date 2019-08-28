import React, { useContext } from "react";
import { Box } from "grommet";
import { AuthenticationContext } from "../Authentication";
import { StyledNavLink, StyledLink } from "../../styles/styles";

export const Header = props => {
  const { user } = useContext(AuthenticationContext);
  const { isLoggedIn } = user;
  return (
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
      style={{ zIndex: "1" }}>
      <StyledLink to="/">Super Mario curator</StyledLink>
      <StyledNavLink to="/courses">Courses</StyledNavLink>
      <StyledNavLink to="/playlists">Playlists</StyledNavLink>
      <StyledNavLink to="/user">Your info</StyledNavLink>
      {isLoggedIn ? (
        <StyledLink to="/sign-out">Sign-out</StyledLink>
      ) : (
        <StyledLink to="/sign-in">Sign-in</StyledLink>
      )}
    </Box>
  );
};
