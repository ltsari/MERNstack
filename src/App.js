import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//путь указан  в ковычках
import ToDoComponent from "./components/todolist";
class App extends Component {
	//передача переменной дочернему компоненту
  render() {
    return (
      <div className="App">
				<ToDoComponent/>
      </div>
    );
  }
}

export default App;
