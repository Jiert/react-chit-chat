import React from 'react';
import CommentList from './commentList';
import CommentForm from './commentForm';

export default React.createClass({
  
  getInitialState: function(){
    return { data: []};
  },

  componentDidMount: function(){
    console.log('Comment Box componentDidMount');

    // TODO: make the room ID dynamic
    this.props.data.fire.child('messages/room-Jiu26RzmAPtzPFTzgZi').on('value', function(data){
      this.setState({ data: data.val() });
    }.bind(this));
  },

  render: function() {
    console.log('commentBox render');
    return (
      <div className="commentBox col-md-4 panel">
        <div className="panel panel-default">
          <div className="panel-heading">
            <button type="button" className="close">×</button>
            <h3 className="panel-title">random</h3>
          </div>
          <div className="panel-body">
            <CommentList data={this.state.data}/>
            <CommentForm data={this.props.data} />
          </div>
          <div className="message-input panel-footer"></div>
        </div>
      </div>
    );
  }
});