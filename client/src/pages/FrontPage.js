import React, { Component } from "react";
import NavBar from "../components/Nav/navBar 2";
import UserGreet from '../components/UserGreet/userGreet';
import SubjectBar from '../components/SubjectBar/subjectBar';
import NewMessage from "../components/NewMessage/NewMessage"
import API from "../utils/API";
class FrontPage extends Component { //main is a test page to test user creation (Working)
    state = {
        returnedName: "",
    }

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
    
      componentWillMount(){
        this.checkForUser()
      }

    render() {
      if (this.state.returnedName === "")
      {
        return (
        <div className="container">
        <NavBar/>
        <NewMessage/>
        </div>
      );
    }
    else {
      return (
        <div className="container">
        <NavBar/>
        <UserGreet
        returnedName = {this.state.returnedName}>
        </UserGreet>
        <SubjectBar/> 
        </div>
      );
    }
    }
    }
    
    export default FrontPage;