import React from 'react';

export default React.createClass({
  handleSubmit: function(event){
    event.preventDefault();

    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author){
      return;
    }

    console.log(author, text);

    // TODO: send request to server
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';

    return;
  },

  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <hr></hr>
        <input type="text" className="form-control" placeholder="Your Name" ref="author"/>
        <input type="text" className="form-control" placeholder="Say something..." ref="text"/>
        <input type="submit" className="btn btn-primary" value="Post" />
      </form>
    );
  }
});