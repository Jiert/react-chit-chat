import React from 'react';
import LoginForm from './loginForm';
import Logout from './logout';

export default React.createClass({

  render: function(){
    console.log('login render method');

    var loginButton;

    if (this.props.data.auth) {
      loginButton = <Logout data={this.props.data} />;
    } else {
      loginButton = <LoginForm data={this.props.data} />;
    }

    return ( loginButton );

  }
});