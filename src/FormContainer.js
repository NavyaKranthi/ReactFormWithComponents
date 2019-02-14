import React, { Component } from "react";
import TextBox from "./TextBox";
import Content from "./Content";


class FormContainer extends Component {
    render() {
        return (
            <div className="FormContainer">
                <div className="signupSection">
                <div class="info">
                   <Content />
                   </div>
                    <form action="#" method="POST" className="signupForm" name="signupform">
                        <ul className="noBullet">
                            <li>
                                <TextBox placeholder="Title" />
                            </li>
                            <li>
                                <TextBox placeholder="Color" /></li>
                            <li>
                                <TextBox placeholder="Value" /></li>
                            <li>
                                <TextBox placeholder="Lable" /></li>
                            <li>
                                <TextBox placeholder="Lable Color" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}
export default FormContainer;