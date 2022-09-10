import React, { useState } from "react";


const App = () =>{
  const state = useState();
//   const [count,setCount] = useState(0);
//   const IncNumber = () =>{
//   setCount(count + 1);
// }

const bg1='#8e44ad';
const [bg,setBg]=useState(bg1);
const [txt,setTxt]=useState('Click Me');

const ChangeColor = () => {
      let newBg = '#34495e';
      let txt = 'You Clicked';
      setTxt(txt);
      setBg(newBg);
}
const ChangeBack = () => {
  setBg(bg1);
}
  return (
    <>
    <div style={{width : '300px',height:'300px',backgroundColor : bg}}>
      {/* <h1>{count}</h1> */}
      {/* <button onClick={IncNumber}>Click me</button> */}
      <button onClick={ChangeColor}  onDoubleClick={ChangeBack}>{txt}</button>
    </div>
     
    </>
  )
}

export default App;

