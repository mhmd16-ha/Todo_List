import React from "react";
import "./ToDoItems.css";

const ToDoItems = (props) => {
  const { items ,deletItem ,lenght } = props;
  const ListItems = lenght  ? (
    items.map(item => {
        return (
          <div key={item.id}>
            <span className="name">{item.name}</span>
            <span className="age">{item.age}</span>
            <span className="action icon" onClick={()=>deletItem(item.id)}>&times;</span>
          </div>
        );
      }
      )
  ):(
      <p>There is no item to show</p>
  )
  return (
    <div className="ListItem">
      <span className="name title">Name</span>
      <span className="age title">Age</span>
      <span className="action title">Action</span>
      {ListItems}
    </div>
  );
};
export default ToDoItems;
