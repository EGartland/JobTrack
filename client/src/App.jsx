import React, { Component } from 'react';
import withRoot from './withRoot'
import { Typography } from '@material-ui/core'
import API from './utils/API';
import Dashboard from './components/Dashboard/Dashboard'
import 'typeface-roboto'



class App extends Component {
	
  async componentDidMount() {

  }

  render() {
    return (
      <div className="App">
		< Dashboard />
      </div>
    );
  }
}

export default withRoot(App);
