import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import { RootState } from '../actions/types';
import * as actions from '../actions';

interface Props {
   auth: boolean;
   changeAuth: typeof actions.changeAuth;
}

class App extends Component<Props> {
   renderButton() {
      if (this.props.auth) {
         return (
            <button onClick={() => this.props.changeAuth(false)}>
               Sign Out
            </button>
         );
      } else {
         return (
            <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
         );
      }
   }

   renderHeader() {
      return (
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/post">Post A Comment</Link>
            </li>
            <li>{this.renderButton()}</li>
         </ul>
      );
   }

   render() {
      return (
         <div>
            {this.renderHeader()}
            <Route path="/post" component={CommentBox} />
            <Route path="/" exact component={CommentList} />
         </div>
      );
   }
}

function mapStateToProps(state: RootState) {
   return { auth: state.auth };
}

export default connect(
   mapStateToProps,
   actions
)(App);
