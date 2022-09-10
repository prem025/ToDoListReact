import React from "react";

const ToDoList = (props) => {
   
    return (
        <>
        <i className="fa fa-times" arial-hidden="true" onClick={() => {
            props.onselect(props.id)
        }}></i>
        <li>{props.text}</li>
        </>
    )
}

export default ToDoList;