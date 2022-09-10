import React, { useState } from "react";


const App = () =>{
  const [name,setName] = useState('');
  const [name2,setNameC] = useState('');
  const [lastname,setLastname] = useState('');
  const [lastname2,setLastname2] = useState('');
  const dispayText = (event) => {
    event.preventDefault();
    setNameC(name);
    setLastname2(lastname)
  }
  const inputIvent = (event) => {
    setName(event.target.value);

  }
  const inputIventTwo = (event) => {
    setLastname(event.target.value);

  }
  return (
    <>
    <div style={{width : '300px',height:'300px'}}>
      <form onSubmit={dispayText}>
      <h1>Hello {name2} {lastname2}</h1>
      <input type="text" placeholder="Enter Your Name" onChange={inputIvent} value={name}/><br /><br />
      <input type="text" placeholder="Enter Your last Name" onChange={inputIventTwo} value={lastname}/><br /><br />
      <button type="submit" >Click Me</button>
      </form>
    </div>
     
    </>
  )
}

export default App;

