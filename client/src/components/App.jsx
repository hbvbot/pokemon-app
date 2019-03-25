import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import EvolutionPage from './EvolutionPage';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/:pokemonID' component={EvolutionPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
