import React, { Component } from "react";
import "./Add.css";
class Add extends Component {
  state = {
    name: "",
    age: "",
  };
  handleChange = (e) => {
    this.setState({
      //id for input name or age
      [e.target.id]: e.target.value,
    });
  };
  hadleSubmit = (e) => {
    e.preventDefault();
    if(e.target.name.value ==='' || e.target.age.value ===''){
        return false;
    }else{
        this.props.addItem(this.state)
        this.setState({
           name: "",
           age: "",
        })
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.hadleSubmit}>
          <input
            type={"text"}
            placeholder="enter your name"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type={"number"}
            placeholder="enter your age"
            id="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input type={"submit"} value="Add" />
        </form>
      </div>
    );
  }
}
export default Add;
