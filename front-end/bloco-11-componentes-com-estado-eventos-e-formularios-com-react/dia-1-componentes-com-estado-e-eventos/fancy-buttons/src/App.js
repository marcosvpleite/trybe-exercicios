import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2 .bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
  }


  handleClick1() {
    console.log("clicou no botão 1!");
    this.setState((prevState) => ({
      numeroDeCliques1: prevState.numeroDeCliques1 + 1
    }))
  }
  handleClick2() {
    console.log("clicou no botão 2!");
    this.setState((prevState) => ({
      numeroDeCliques2: prevState.numeroDeCliques2 + 1
    }))
  }
  handleClick3() {
    console.log("clicou no botão 3!");
    this.setState((prevState) => ({
      numeroDeCliques3: prevState.numeroDeCliques3 + 1
    }))
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick1}>{`Botão 1: ${this.state.numeroDeCliques1}`}</button>
        <button onClick={this.handleClick2}>{`Botão 2: ${this.state.numeroDeCliques2}`}</button>
        <button onClick={this.handleClick3}>{`Botão 3: ${this.state.numeroDeCliques3}`}</button>
      </div>
    );
  }
}

export default App;
