import React from 'react';
import {
  Heading, 
  Grommet,
} from 'grommet'
import {RoutesContainer} from './containers/RoutesContainer'
import {Header} from './components/Header/'
import {theme} from './styles/theme'

function App() {
  return (
    <Grommet theme={theme}>
      <Header>
        <Heading level='3' margin='none'>Mario Maker curator</Heading>
      </Header>
      <RoutesContainer />
    </Grommet>
  );
}

export default App;
