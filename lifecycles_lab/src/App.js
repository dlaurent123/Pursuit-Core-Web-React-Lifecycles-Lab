import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form";
import TodoList from "./components/todosList";
class App extends React.Component {
  state = {
    inputVal: "",
    todosList: []
  };
  handleForm = e => {
    e.preventDefault();
    this.setState({
      inputVal: e.target
    });
    debugger;
  };

  render() {
    return (
      <div className="App">
        <Form handleForm={this.handleForm} />
        {/* <TodoList /> */}
      </div>
    );
  }
}

export default App;
