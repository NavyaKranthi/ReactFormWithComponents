import React from "react";
import "./App.css";

function TextBox(props) {
    return (
        <div className="TextBox">
            <label>{props.title}</label>
            <input
                className="inputFields"
                name={props.name}
                type={props.inputType}
                value={props.content}
                placeholder={props.placeholder} />
        </div>
    )
}
export default TextBox;