import React from 'react';
import _ from 'underscore';

export default React.createClass({

  getInitialState: function(){
    return { data: []};
  },

  componentDidMount: function(){
    // TODO: A better way to load rooms. Do we want all? No.
    this.props.data.fire.child('rooms').on('value', function(data){
      this.setState({ data: data.val() });
    }.bind(this));
  },

  render: function() {
    var roomNodes = this.state.data && _.toArray(this.state.data).map(function(room){
      return(
        <button className="btn btn-primary btn-block">{room.name}</button>
      )
    });

    return (
      <div className="room-list">
        {roomNodes}
      </div>
    );
  }
  
});