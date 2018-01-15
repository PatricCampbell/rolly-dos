import React, { Component } from "react";
import "./App.css";

import Header from 'header';
import TodosContainer from 'todosContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodosContainer />
      </div>
    );
  }
}

export default App;
