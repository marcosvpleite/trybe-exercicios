import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2 .bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
  }


  handleClick1() {
    console.log("clicou no botão 1!");
    this.setState((prevState) => ({
      numeroDeCliques: prevState.numeroDeCliques + 1
    }))
  }
  handleClick2() {
    console.log("clicou no botão 2!");
  }
  handleClick3() {
    console.log("clicou no botão 3!");
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick1}>{`Botão 1: ${this.state.numeroDeCliques}`}</button>
        <button onClick={this.handleClick2}>Botão 2</button>
        <button onClick={this.handleClick3}>Botão 3</button>
      </div>
    );
  }
}

export default App;
