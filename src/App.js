import React from "react";
import { Box, Grommet } from "grommet";
import { RoutesContainer } from "./containers/RoutesContainer";
import { theme } from "./styles/theme";

function App() {
  return (
    <Grommet theme={theme}>
      <Box>
        <RoutesContainer />
      </Box>
    </Grommet>
  );
}

export default App;
