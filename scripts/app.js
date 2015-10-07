import React from 'react';
import CommentBox from './commentBox';
import Firebase from 'firebase';
import Login from './login';

(function(){

  var data = {
    firebase: new Firebase('https://blinding-torch-9943.firebaseio.com/'),
  };

  // var authDataCallback = function(auth){
  //   Object.assign(data, { auth: auth });
  //   console.log('authDataCallback', this)
  // };

  // data.firebase.onAuth(authDataCallback);

  React.render(
    <CommentBox data={ data } />, document.getElementById('main-content') 
  );

  React.render(
    <Login data={ data } />, document.getElementById('main-sidebar-nav')
    // <LoginForm data={ data } />, document.getElementById('main-sidebar-nav')
  );

})()
