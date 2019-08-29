import React from "react";
import { Box, Grommet, grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { RoutesContainer } from "./containers/RoutesContainer";
import { theme } from "./styles/theme";

function App() {
  return (
    <Grommet theme={deepMerge(grommet, theme)}>
      <Box height="100vh">
        <RoutesContainer />
      </Box>
    </Grommet>
  );
}

export default App;
