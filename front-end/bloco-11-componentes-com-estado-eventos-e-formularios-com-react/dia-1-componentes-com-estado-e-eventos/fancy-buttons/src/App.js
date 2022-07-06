import React from 'react';
import './App.css';

function handleClick1() {
  console.log("clicou no botão 1!");
}
function handleClick2() {
  console.log("clicou no botão 2!");
}
function handleClick3() {
  console.log("clicou no botão 3!");
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <button onClick={handleClick1}>Botão 1</button>
        <button onClick={handleClick2}>Botão 2</button>
        <button onClick={handleClick3}>Botão 3</button>
      </div>
    );
  }
}

export default App;