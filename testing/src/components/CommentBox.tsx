import React, { Component, FormEvent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { fetchComments, saveComment } from '../actions/index';
import requrieAuth from './requrieAuth';

export interface IActionProps {
   fetchComments: typeof fetchComments;
   saveComment: typeof saveComment;
}

interface IState {
   comment: string;
}

class CommentBox extends Component<IActionProps, IState> {
   public state: IState = { comment: '' };

   public render() {
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

   private handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      this.setState({ comment: event.target.value });
   };

   private handleSubmit = (event: FormEvent) => {
      event.preventDefault();

      const { comment } = this.state;
      this.props.saveComment(comment);
      this.setState({ comment: '' });
   };
}

export default connect(
   null,
   actions
)(requrieAuth(CommentBox));
