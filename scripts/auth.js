import React from 'react';
import Firebase from 'firebase';
import CommentBox from './commentBox';
import Login from './login';


export default React.createClass({
  
  getInitialState: function(){
    console.log('parent getInitialState');
    return { fire: new Firebase('https://blinding-torch-9943.firebaseio.com/') };
  },

  componentWillMount: function(){
    this.state.fire.onAuth(this.onAuth);
  },

  onAuth: function(auth){
    console.log('onAuth: ', auth);
    this.setState({ auth: auth });
  },

  render: function(){
    console.log('parent render');
    return(
      <div>
        <Login data={this.state} />
      </div>
    );
  }

});