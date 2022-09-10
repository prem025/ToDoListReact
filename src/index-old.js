import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Heading from './Heading';
// import App,{youtuber,youtuber2} from './App';
import * as ques from './App';
import Sdata from './Sdata';
// function ncard(val){
//   return (
//      <ques.Card imgsrc={val.imgsrc} name1={val.name1} name2={val.name2} />
//   )
// }
// const ncard=()=>{
//   if
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <App/>
    {youtuber}
    {youtuber2} */}
    <ques.default/>
    {/* {ques.youtuber}
    {ques.youtuber2}
    {ques.add(2,4)}
    {ques.mul(2,4)}
    {ques.div(2,4)}
     */}
  
  {/* // <ques.Card imgsrc={Sdata[1].imgsrc} name1={Sdata[1].name1} name2={Sdata[1].name2} />  </> */}
   {Sdata.map((val,index) => {
    return (
      <ques.Card imgsrc={val.imgsrc} name1={val.name1} name2={val.name2} />
   )
   })}
   </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
