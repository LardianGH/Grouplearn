import React, { Component } from "react";
import { Container } from "../components/Grid";
import  Form2  from "../components/Form2/index.js";
import API from "../utils/API";
import PostGroup from "../components/PostGroup";

class Main extends Component { //main is a test page to test user creation (Working)
    
    state = {
        returnedName: "",
        returnedEmail: ""
    }

       handleSubmit = (event, userName, password) => { //whenever the form is submitted

event.preventDefault()
if (userName && password) { //if all 2 areas are filled out, run this
    //console.log("posted") //log them
    API.getUser({ //call getUser from ../utils/API
      userName, //insert the 2 data areas to getUser
      password,
    })
      .then(res => {
        //console.log(res.data)
        this.setState({
          returnedName: res.data.dbModel[0].userName,
          returnedEmail: res.data.dbModel[0].email
        });
        this.props.history.push("/")
      })
      .catch(err => console.log(err));
    }
};

checkForUser = () => {
  //console.log("checkForUser")
  API.findCookie()
.then(res => {
  this.setState({
    returnedName: res.data.userName,
    returnedEmail: res.data.email
  });
})
.catch(err => console.log(err));
}


//something is wrong
render() {
  
return (

<Container fluid>
You are logged in as: {this.state.returnedName}
<br></br>
Your email is: {this.state.returnedEmail}
    <Form2>
    </Form2>

 

    <PostGroup
    returnedName = {this.state.returnedName}
    returnedEmail = {this.state.returnedEmail}
    ></PostGroup>

    <button
    onClick={() => this.checkForUser()}>
        get user saved to cookie
    </button>


</Container>

)
}
}

export default Main;