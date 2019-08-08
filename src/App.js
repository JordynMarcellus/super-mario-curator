import React from "react";
import { Box, Grommet } from "grommet";
import { RoutesContainer } from "./containers/RoutesContainer";
import { Header } from "./components/Header/";
import { theme } from "./styles/theme";
import { StyledLink } from "./styles/styles";

function App() {
  return (
    <Grommet theme={theme}>
      <Box>
        <Header>
          <StyledLink to="/">Super Mario curator</StyledLink>
          <StyledLink to="/login">Sign in</StyledLink>
        </Header>
        <RoutesContainer />
      </Box>
    </Grommet>
  );
}

export default App;
