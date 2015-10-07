import React from 'react';

export default React.createClass({
  render: function(){
    return (
      <div className="comment">
        <p>
          <span className="text-primary"><strong>{this.props.author}:</strong> </span>
          <span>{this.props.children}  </span>
        </p>
      </div>
    );
  }
});