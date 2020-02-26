import React, {Component} from "react";
import Nav from "../components/Nav/navBar 2";
import MessageBoard from "../components/MessageBoard";
import Header from "../components/Header";
import PostGroup from "../components/PostGroup";
import API from "../utils/API";

class Chatroom extends Component {

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
      })
      .catch(err => console.log(err));
      }
    
      getSubjectPosts = () => {
        //console.log("checkForPosts")
        API.getSubjectPosts({
          subject: this.state.subject
        })
      .then(res => {
          //console.log(res)
        this.setState({
          data: res
        });
      })
      .catch(err => console.log(err));
      }

      refreshPage(){
        //console.log("hey")
        window.location.reload(true);
      }
    
      componentDidMount(){
        this.checkForUser()
        this.getSubjectPosts()
      }
    render(){
        return (
            <div className="bigCon">
            <div className= "container">
            <Nav></Nav>
            <Header
            subject = {this.state.subject}>
            </Header>
            
            <MessageBoard
            data = {this.state.data}
            userName = {this.state.returnedName}
            refreshPage={this.refreshPage}>
            </MessageBoard>
            
            </div>
            <div>
            <PostGroup
          subject = {this.state.subject}
          returnedName = {this.state.returnedName}
          returnedEmail = {this.state.returnedEmail}
          submitComment={this.submitComment}
          refreshPage={this.refreshPage}
          ></PostGroup>
          </div>
            </div>
        )
    }
}
export default Chatroom;