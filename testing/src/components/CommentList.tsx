import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../actions/types';

interface Props {
   comments: string[];
}

class CommentList extends Component<Props> {
   renderComments() {
      const { comments } = this.props;

      return comments.map(comment => <li>{comment}</li>);
   }

   render() {
      return (
         <div>
            <h4>Comment List</h4>
            <ul>{this.renderComments()}</ul>
         </div>
      );
   }
}

function mapStateToProps(state: RootState) {
   return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
