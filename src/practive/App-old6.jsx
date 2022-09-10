import React, { useState } from "react";
import ToDoList from "./ToDoList";


const App = () =>{

  const [inputList,setInputList] = useState("");
  const [items,setItems] = useState([]);
  const itemEvent = (event) =>{
    setInputList(event.target.value);
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems,inputList];
    });
    setInputList('');
  }

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrayElement,index) => {
            return index !== id;
      })
    })
  }
  return (
    <>
    <div>
    
      <h1>To Do List</h1>
      <input type="text" name="addItems" value={inputList} onChange={itemEvent} placeholder="Enter Items"/>
      <button onClick={listOfItems} > + </button>
      <ol>
        
        {items.map((itemValue,index) => {
          return <ToDoList text = {itemValue} id={index} key={index} onselect={deleteItems}/>
        })}
      
      </ol>
    </div>
     
    </>
  )
}

export default App;

