import React from "react";
import Heading from "./Heading";
import Para from "./Para";

function App(){
    return (
        <>
          <Heading/>
          <Para/>
        </>
    )
}
const youtuber = "My Youtube channel";
const youtuber2 = "My Youtube channel 2";

function add(a,b){
    return a+b;

}
function mul(a,b){
    return a*b;

}
function div(a,b){
    return a/b;

}
function Card(param){
    return (
    <>
    <div className="card">
        <img src={param.imgsrc} alt="Avatar" style={{width: "200px"}}/>
        <div className="container">
          <h4><b>{param.name1}</b></h4> 
          <p>{param.name2}</p> 
        </div>
      </div>
      
    </>
    )
  }
export default App;
export {youtuber,youtuber2,add,mul,div,Card} ;
