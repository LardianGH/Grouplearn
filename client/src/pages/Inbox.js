import React, { Component } from "react";
import RepliesBox from "../components/RepliesBox/RepliesBox"
import Nav from "../components/Nav/navBar 2"
import { Container } from "../components/Grid";
import Returning from "../components/Returning"
import API from "../utils/API";

class Inbox extends Component {

  state = {
data: { data: [] },
subject: this.props.match.params.subject
  }

    checkForUser = () => {
        //console.log("checkForUser")
        API.findCookie()
      .then(res => {
        this.setState({
          returnedName: res.data.userName,
          returnedEmail: res.data.email
        });
        this.getReplies()
      })
      .catch(err => console.log(err));
      }
    
      getReplies = () => {
        //console.log("checkForPosts")
        //console.log(this.state.returnedName)
        API.getReplies({
          userName: this.state.returnedName,
          email: this.state.returnedEmail
        })
      .then(res => {
          //console.log("He runnin")
          //console.log(res)
        this.setState({
          data: res
        });
      })
      .catch(err => console.log(err)
      );
      }
    
      componentDidMount(){
        this.checkForUser()
      }

      render() {

        return (
            <div>
            <Nav></Nav>
           <RepliesBox
            data = {this.state.data}
            userName = {this.state.returnedName}>
           </RepliesBox>
           </div>
        )
    }
}

export default Inbox;