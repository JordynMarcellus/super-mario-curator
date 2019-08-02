import React from 'react';
import {Anchor, Button, Text} from 'grommet'
import {Link} from '@reach/router'
import {
  Box,
  Grommet,
} from 'grommet'
import { RoutesContainer } from './containers/RoutesContainer'
import { Header } from './components/Header/'
import { theme } from './styles/theme'

function App() {
  return (
    <Grommet theme={theme}>
      <Box>
        <Header>
          <Link to="/" >
            Super Mario curator
          </Link>
          <Link to="/login">
            Sign in
          </Link>
        </Header>
        <RoutesContainer />
      </Box>
    </Grommet>
  );
}

export default App;
