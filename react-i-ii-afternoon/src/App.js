import React, {Component} from 'react';
import Citizen from './components/Citizen';
import Nav from './components/Nav';
import data from './data';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      citizens: [],
      navigation: ['Previous','Next']
    }
  }

  componentDidMount(){
    this.setState({
      citizens: data
    })
  }

  render() {
    console.log(this.state)
    const citizens= this.state.citizens.map(element => {
      return <div>
        <Citizen citizen={element}/>
      </div>
    })
    const navigation= this.state.navigation
    return (
      <div className="App">
        {citizens}
        {navigation}
      </div>
   );
  }
}

