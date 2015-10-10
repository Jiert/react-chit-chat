import React from 'react';
import Firebase from 'firebase';
import CommentBox from './commentBox';
import Login from './login';
import Rooms from './rooms';

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
      <div className="row">
        <div id="main-sidebar-nav" className="col-sm-3 col-md-2 sidebar">
          <Login data={this.state} />
          <Rooms data={this.state} />
        </div>
        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <div className="row">
            <CommentBox data={this.state} />
          </div>
        </div>
      </div>
    );
  }

});