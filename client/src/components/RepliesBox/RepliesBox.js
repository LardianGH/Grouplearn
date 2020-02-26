import React from "react";
import InboxPost from "../InboxPost/InboxPost";
import API from "../../utils/API";
class RepliesBox extends React.Component {

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
            //console.log(res.data)
            this.props.history.push("/") 
          })
          .catch(err => console.log(err));
        
    };


  render() {
    if (this.props.data.data) {
    return (
      <div>
        {this.props.data.data.map(post => (
        <InboxPost
        key={post._id}
         name = {post.user.userName}
         subject = {post.subject}
         email = {post.user.email}
         location = {post.location}
         content = {post.content}
         submitReply = {this.submitReply}
         handleInputChange = {this.handleInputChange}
         reply = {this.state.reply[post._id]}
         replies = {post.replies}
        >
        </InboxPost> 
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
export default RepliesBox;