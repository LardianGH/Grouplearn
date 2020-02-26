import React from "react";
import Post from "../Post";
import API from "../../utils/API";
import "./style.css";
class MessageBoard extends React.Component {

  state = {
    reply: ""
  }

  handleInputChange = event => { //Allows the textboxes to be used.
    const { name, value } = event.target;
    //console.log(name)
    this.setState({
      [name]: value
    });
  };

  submitReply = (event, id) => { //whenever the form is submitted
    event.preventDefault()
    //console.log(this.state[id])
let replyContent = this.state[id]
let userName = this.props.userName

        API.submitReply({id, userName, replyContent})
          .then(res => {
           this.props.refreshPage()
          })
          .catch(err => console.log(err));
        
    };


  render() {
    if (this.props.data.data.length > 0) {
    return (
      <div className="MessageBoard">
        {this.props.data.data.map(post => (
        <Post
        key={post._id}
        asdf={post._id}
         name = {post.user.userName}
         subject = {post.subject}
         email = {post.user.email}
         location = {post.location}
         content = {post.content}
         submitReply = {this.submitReply}
         handleInputChange = {this.handleInputChange}
         reply = {this.state.reply[post._id]}
        >
        </Post> 
        ))}
      </div> 
    );
  } //if no posts exist dont even try to render Posts
  else {
    return (
      <div className="MessageBoard">
    <h1
    style={{textAlign: "center"}}>LOADING...</h1>
    </div>
    )
  }
  }
}
export default MessageBoard;