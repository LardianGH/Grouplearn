import React from "react";
import "./style.css"


class Post extends React.Component {

  //unable to get all replies to show up

 /* getReplies(){
    //console.log(this.props.replies)
  } */
//{props.replies[0].replyContent} 

render() {

  if (this.props.replies && this.props.replies.length > 0) {

    return(
    
<div className="post-container2" id={this.props.subject}>
          <div id="AvatarInfo">
    <p>From Chatroom: {this.props.subject}</p>
    <p>Your Post: {this.props.content}</p>
    <p>Location: {this.props.location}</p>
          </div>
    <span className="time-right">{this.props.time}</span>
    <p>Latest reply: {this.props.replies[this.props.replies.length - 1].replyContent}</p>
        <p>From User: {this.props.replies[this.props.replies.length -1].userName}</p>
        </div>
      )
      
    }
    else {
      return null
    }
  }
}
  
//future dev: figure out how to loop over replies.
export default Post;