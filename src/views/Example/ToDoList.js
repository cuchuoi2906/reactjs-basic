import React from "react";

const ToDoList =  (props)=>{
    const items = props.items;

    const listItems = items.map((item) =>
        <li key={item.id}>{item.text}</li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
}

export default ToDoList;