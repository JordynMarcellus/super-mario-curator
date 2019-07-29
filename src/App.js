import React from 'react';
import {Button} from 'grommet'
import {Link} from '@reach/router'
import {
  Heading, 
  Grommet,
} from 'grommet'
import { RoutesContainer } from './containers/RoutesContainer'
import { Header } from './components/Header/'
import { theme } from './styles/theme'

function App() {
  return (
    <Grommet theme={theme}>
      <Header>
        <Link to="/">
          <Heading as={Button} level='3' margin='none'>Mario Maker curator</Heading>
        </Link>
        <Link to="/login">Sign in</Link>
      </Header>
      <RoutesContainer />
    </Grommet>
  );
}

export default App;
