import React, { Component } from "react";
import ToDoItems from "./components/todoitem/ToDoItems";
import Add from "./components/add item/Add";
class App extends Component {
  state = {
    items: [
      { id: 1, name: "Mhmd", age: 20 },
      { id: 2, name: "saeed", age: 21 },
      { id: 3, name: "hamouda", age: 22 },
    ],
  };
  //first way
  deletItem = (id) => {
    let items = this.state.items;
    let i = items.findIndex((item) => item.id === id);
    items.splice(i, 1);
    this.setState({
      items: items,
    });
  };
  //second way
  // deletItem=(id)=>{
  //   let items=this.state.items.filter(item=>{
  //     return item.id !==id
  //   })
  // this.setState({
  //       items:items
  //     })
  //   }

  //add items
  addItem = (i) => {
    i.id = Math.random();
    let items = this.state.items;
    items.push(i);
    this.setState({
      items,
    });
  };
  render() {
    return (
      <div className="App Container">
      <h1 className="Text-center">Todo List</h1>
        <ToDoItems
          lenght={this.state.items.length}
          items={this.state.items}
          deletItem={this.deletItem}
        />
        <Add addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
