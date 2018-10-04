import React, { Component } from 'react';
import { LoginForm } from './components'
import withRoot from './withRoot'
import { Typography } from '@material-ui/core'
import API from './utils/API'



class App extends Component {

  async componentDidMount() {
    // try { 
    //   let results = await API.getTest()
    //   console.log(results)
    // } catch(err) {
    //   throw err
    // }
  }

  render() {
    return (
      <div className="App">

      <Typography align='center' variant='headline'>Home Page</Typography>

      <LoginForm />

        

      </div>
    );
  }
}

export default withRoot(App);
