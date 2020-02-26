import React, { Component } from "react";
import { Col, Row} from "../Grid";
import { Input, FormBtn } from "../Form";
import API from "../../utils/API";

class Form2 extends Component { //main is a test page to test user creation (Working)

    state = { //All the variables that will change
      userName: "",
        password: "",
        email: ""
      };
    

    handleSubmit = event => { //whenever the form is submitted
event.preventDefault()

const form = this.state

if (form.userName && form.password && form.email) { //if all 3 areas are filled out, run this
    //console.log(form.userName) //log them
    //console.log(form.password)
    //console.log(form.email)
    API.saveUser({ //call saveUser from ../utils/API
      userName: form.userName, //insert the 3 data areas to saveUser
      password: form.password,
      email: form.email,
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    }
};

handleInputChange = event => { //Allows the textboxes to be used.
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
    

render() {
return (

    <Row>
        <Col size="md-3">
<form>
    Sign in:
    <Input
        value={this.state.name}
        onChange={this.handleInputChange}
        name="userName"
        placeholder="enter userName here"
        />
        <Input
        value={this.state.password}
        onChange={this.handleInputChange}
        name="password"
        placeholder="enter password here"
        />
         <Input
        value={this.state.email}
        onChange={this.handleInputChange}
        name="email"
        placeholder="enter email here"
        />
        <FormBtn
        onClick={this.handleSubmit} //when this button is clicked, it submits the form
        >Submit</FormBtn>
</form>
        </Col>
    </Row>


)
}
}

export default Form2;