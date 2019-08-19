import React, { useContext } from "react";
import { Box, Grommet } from "grommet";
import { AuthenticationContext } from "./components/Authentication";
import { RoutesContainer } from "./containers/RoutesContainer";
import { Header } from "./components/Header/";
import { theme } from "./styles/theme";
import { StyledLink } from "./styles/styles";

function App() {
  const { user } = useContext(AuthenticationContext);
  const { isLoggedIn } = user;
  return (
    <Grommet theme={theme}>
      <Box>
        <Header>
          <StyledLink to="/">Super Mario curator</StyledLink>
          {isLoggedIn ? (
            <StyledLink to="/login">Sign-out</StyledLink>
          ) : (
            <StyledLink to="/login">Login</StyledLink>
          )}
        </Header>
        <RoutesContainer />
      </Box>
    </Grommet>
  );
}

export default App;
