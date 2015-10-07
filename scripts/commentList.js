import React from 'react';
import Comment from './comment';
import _ from 'underscore';

export default React.createClass({

  render: function() {

    var commentNodes = this.props.data && _.toArray(this.props.data).map(function(comment){
      return (
        <Comment author={comment.author}>
          {comment.message}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});
