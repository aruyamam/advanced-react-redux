import React, { Component, FormEvent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { fetchComments, saveComment } from '../actions/index';

interface Props {
   fetchComments: typeof fetchComments;
   saveComment: typeof saveComment;
}

interface State {
   comment: string;
}

class CommentBox extends Component<Props, State> {
   state = { comment: '' };

   handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      this.setState({ comment: event.target.value });
   };

   handleSubmit = (event: FormEvent) => {
      event.preventDefault();

      const { comment } = this.state;
      this.props.saveComment(comment);
      this.setState({ comment: '' });
   };

   render() {
      const { comment } = this.state;
      const { fetchComments } = this.props;

      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <h4>Add a Comment</h4>
               <textarea onChange={this.handleChange} value={comment} />
               <div>
                  <button>Submit Comment</button>
               </div>
            </form>
            <button className="fetch-comments" onClick={fetchComments}>
               Fetch Comments
            </button>
         </div>
      );
   }
}

export default connect(
   null,
   actions
)(CommentBox);
