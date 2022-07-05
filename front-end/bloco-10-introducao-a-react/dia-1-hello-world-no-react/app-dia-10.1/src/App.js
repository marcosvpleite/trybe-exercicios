import React from 'react';
import './App.css';


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const listaTarefas = ["tarefa1", "tarefa2", "tarefa3", "tarefa4"]

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <ul>
        {
          listaTarefas.map((tarefa) => Task(tarefa))
        }
      </ul>
    </div>
  );
}
}

export default App;
