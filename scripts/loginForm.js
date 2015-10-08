import React from 'react';

export default React.createClass({

  getInitialState: function(){
    return { email: null , password: null };
  },

  authenticate: function(){  
    this.props.data.fire.authWithPassword(this.state, this.authCallback);
  },

  authCallback: function(error, authData){
    if (error) {
      console.log("Login Failed!", error);
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
    console.log('login Form Render');
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input name="email"    onChange={this.onChange} type="email"    value={this.state.email}    className="form-control" placeholder="email address" ref="email"/>
        <input name="password" onChange={this.onChange} type="password" value={this.state.password} className="form-control" placeholder="password"      ref="password"/>
        <input type="submit" className="btn btn-primary" value="Post" />
      </form>
    );
  }

});