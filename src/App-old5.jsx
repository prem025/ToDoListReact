import React, { useState } from "react";


const App = () =>{

  const [fullName,setfullName] = useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
    qua:"",
  });


  const formSubmit = (event) => {
    event.preventDefault();
   
  }
  const inputIvent = (event) => {
    console.log(event.target.value);
    // setName(event.target.value);
    // const value = event.target.value;
    // const name = event.target.name;
    const {value,name} = event.target;

    setfullName((preValue) =>{
     return {
        ...preValue,
        [name]: value,
     }
    })
  }
  
  return (
    <>
    <div>
      <form onSubmit={formSubmit}>
      <h1>Hello {fullName.fname} {fullName.lname}</h1><br />{fullName.email} {fullName.phone}<br/>{fullName.qua}<br/>
      <input type="text" placeholder="Enter Your first Name" name="fname" onChange={inputIvent} value={fullName.fname}/><br /><br />
      <input type="text" placeholder="Enter Your last Name" name="lname" onChange={inputIvent} value={fullName.lname}/><br /><br />
      <input type="text" placeholder="Enter Your email" name="email" onChange={inputIvent} value={fullName.email}/><br /><br />
      <input type="number" placeholder="Enter Your Phone" name="phone" onChange={inputIvent} value={fullName.phone}/><br /><br />
      <input type="text" placeholder="Enter Your Qualification" name="qua" onChange={inputIvent} value={fullName.qua}/><br /><br />
      <button type="submit" >Click Me</button>
      </form>
    </div>
     
    </>
  )
}

export default App;

