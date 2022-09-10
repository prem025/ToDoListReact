import React, { useState } from "react";


const App = () =>{

  const [fullName,setfullName] = useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
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
      if(name==="fName"){
        return{
          fname: value,
          lname:preValue.lname,
          email:preValue.email,
          phone:preValue.phone,
        }

      }
      else if(name==="lName"){
        return{
          lname: value,
          fname:preValue.fname,
          email:preValue.email,
          phone:preValue.phone,
        }

      }
      else if(name==="email"){
        return{
          email: value,
          fname:preValue.fname,
          lname:preValue.lname,
          phone:preValue.phone,
        }

      }
      else if(name==="phone"){
        return{
          phone: value,
          fname:preValue.fname,
          lname:preValue.lname,
          email:preValue.email,
        }

      }
    })
  }
  
  return (
    <>
    <div>
      <form onSubmit={formSubmit}>
      <h1>Hello {fullName.fname} {fullName.lname}</h1><br />{fullName.email} {fullName.phone}<br/>
      <input type="text" placeholder="Enter Your first Name" name="fName" onChange={inputIvent} value={fullName.fname}/><br /><br />
      <input type="text" placeholder="Enter Your last Name" name="lName" onChange={inputIvent} value={fullName.lname}/><br /><br />
      <input type="text" placeholder="Enter Your email" name="email" onChange={inputIvent} value={fullName.email}/><br /><br />
      <input type="number" placeholder="Enter Your Phone" name="phone" onChange={inputIvent} value={fullName.phone}/><br /><br />
      <button type="submit" >Click Me</button>
      </form>
    </div>
     
    </>
  )
}

export default App;

