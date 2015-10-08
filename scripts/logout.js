import React from 'react';

export default React.createClass({
  
  onLogout: function(){
    console.log('onLogout');
    this.props.data.fire.unauth();
  },

  render: function(){
    return( <button type="submit" className="btn" onClick={this.onLogout}>Log out</button> );
  }
})