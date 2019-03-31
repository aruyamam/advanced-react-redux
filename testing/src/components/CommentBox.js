import React, { Component } from 'react';

class CommentBox extends Component {
   state = { comment: '' };

   handleChange = event => {
      this.setState({ comment: event.target.value });
   };

   handleSubmit = event => {
      event.preventDefault();

      // TODO - Call an action creator
      // And save the comment

      this.setState({ comment: '' });
   };

   render() {
      const { comment } = this.state;

      return (
         <form onSubmit={this.handleSubmit}>
            <h4>Add a Comment</h4>
            <textarea onChange={this.handleChange} value={comment} />
            <div>
               <button>Submit Comment</button>
            </div>
         </form>
      );
   }
}

export default CommentBox;
