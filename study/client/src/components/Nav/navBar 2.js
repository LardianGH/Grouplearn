import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <div className="ui secondary  menu" id="nav">
        <a className="active item" href="/">
          <i className="home icon" id="home-nav" />
        </a>
        <div className="right menu">
          <div className="item">
            <div className="ui fluid icon input">
              <input type="text" placeholder="Search..." id="place-nav" />
              <i className="search link icon" id="search-nav" />
            </div>
          </div>
          <div className="ui compact menu">
            <div className="ui simple dropdown item" id="subjects-dd">
              Subjects
              <i className="book icon" />
              <div className="menu">
                <div className="item" id="math-dd">
                  Math
                </div>
                <div className="item" id="science-dd">
                  Science
                </div>
                <div className="item" id="art-dd">
                  Art
                </div>
                <div className="item" id="history-dd">
                  History
                </div>
              </div>
            </div>
          </div>
          <a className="item" id="subjects-dd" href="/">
            Friends
            <i className="child icon" id="friend-nav"></i>
          </a>
          <a className="ui item" id="signup-nav" href="/signup">
            Sign Up
          </a>
          <a className="ui item" id="login-nav" href="/login">
            Login
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;