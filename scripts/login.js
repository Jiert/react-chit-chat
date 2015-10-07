import React from 'react';
import LoginForm from './loginForm';
import Logout from './logout';

export default React.createClass({

  getInitialState: function(){
    this.firebase = this.props.data.firebase;
    this.firebase.onAuth(this.authDataCallback);
    return { email: '', password: '' };
  },

  // componentWillMount: function(auth){
  //   console.log('componentWillMount', auth)
  //   if (auth){
  //     this.setState({
  //       email: auth.password.email,
  //     });
  //   }
  // },

  authDataCallback: function(auth){
    console.log('authDataCallback', auth)
    if (auth){
      this.setState({
        email: auth.password.email,
      });
    }
  },

  render: function(){
    console.log('login render method');

    var loginButton;

    if (this.state.email.length) {
      loginButton = <Logout data={this.props.data} />;
    } else {
      loginButton = <LoginForm data={this.props.data} />;
    }

    return ( loginButton );
  }
});