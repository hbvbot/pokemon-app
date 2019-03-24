import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
