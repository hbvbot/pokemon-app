import React from 'react';
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.post('/getpokemon').then(res => {
      console.log(res.data);
    });
  }

  render() {
    return <div />;
  }
}

export default Main;
