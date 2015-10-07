import React from 'react';

export default React.createClass({

  getInitialState: function(){
    this.firebase = this.props.data.firebase;
    return { email: '', password: '' };
  },

  authenticate: function(){
    this.firebase.authWithPassword(this.state, this.authCallback);
  },

  authCallback: function(error, authData){
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  },

  onChange: function(e) {
    var obj = {};
    
    obj[e.target.name] = e.target.value;

    this.setState(obj);
  },

  handleSubmit: function(event){
    event.preventDefault();

    if (!this.state.email || !this.state.password) return;

    this.authenticate();

    React.findDOMNode(this.refs.email).value = '';
    React.findDOMNode(this.refs.password).value = '';

    return;
  },

  render: function() {
    // TODO: Need to abstract this out into other components

    // var loginButton;
    // if (loggedIn) {
    //   loginButton = <LogoutButton />;
    // } else {
    //   loginButton = <LoginButton />;
    // }

    return (
    <form className="commentForm" onSubmit={this.handleSubmit}>
      <input name="email"     onChange={this.onChange} type="email" className="form-control" value={this.state.user} placeholder="email address" ref="email"/>
      <input name="password" onChange={this.onChange} type="password" className="form-control" value={this.state.password} placeholder="password" ref="password"/>
      <input type="submit" className="btn btn-primary" value="Post" />
    </form>
  );


  }

});