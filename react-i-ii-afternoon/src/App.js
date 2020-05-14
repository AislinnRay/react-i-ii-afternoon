import React, {Component} from 'react';
import Citizen from './components/Citizen';
//import { Link } from "react-router-dom";
//import router from "./router";
import data from './data';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      citizens: [],
      indx: 0
    };
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.home = this.home.bind(this)
  }

  componentDidMount(){
    this.setState({
      citizens: data
    })
  }

  increase(){
    if(this.state.indx !== 24){
      this.setState({indx: this.state.indx + 1})}
    else if(this.state.indx === 24){
       this.setState({indx: 0})}}

  decrease(){
    if(this.state.indx > 0 && this.state.indx < 25){
    this.setState({indx: this.state.indx - 1})}
    else if(this.state.indx === 0){
      this.setState({indx: this.state.indx = 24})}}

   home(){this.setState({indx: 0})}
  

  render() {
    console.log(this.state)
    const citizens= this.state.citizens.map((element, index) => {
      if(this.state.indx === index){
        return <div>
        <Citizen citizen={element}/>
      </div>
      }
    })
    const navigation= this.state.navigation
    return (
      <div className="App">
        <button onClick={this.home}>Home</button>
        {citizens}
        <button onClick={this.decrease}>Previous</button>
        <button onClick={this.increase}>Next</button>
      </div>
   );
  }
}

