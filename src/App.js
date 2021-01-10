import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';
import React, { Component } from 'react'


export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  render(){
    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className="container">
        <Counters 
        counters={this.state.counters} 
        onDelete={this.handleDelete} 
        onReset={this.handleReset} 
        onIncreament={this.handleIncreament}/>
        </main>
      </React.Fragment>
    );  
  }
  
  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => c.id !== counter.id);
    this.setState({ counters });
  };

  handleIncreament = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => (c.value = 0));
    this.setState({ conuters: counters });
  };
}
