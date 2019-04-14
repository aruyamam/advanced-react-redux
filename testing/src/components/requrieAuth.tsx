import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { RootState } from '../actions/types';
import { IActionProps } from './CommentBox';

interface IProps extends IActionProps, RouteComponentProps {
   auth: boolean;
}

const requireAuth = (ChildComponent: React.ComponentType<IActionProps>) => {
   class ComposedComponent extends Component<IProps> {
      public componentDidMount() {
         this.shouldNavigateAway();
      }

      public componentDidUpdate() {
         this.shouldNavigateAway();
      }

      public render() {
         return <ChildComponent {...this.props} />;
      }

      private shouldNavigateAway() {
         if (!this.props.auth) {
            this.props.history.push('/');
         }
      }
   }

   function mapStateToProps(state: RootState) {
      return { auth: state.auth };
   }

   return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;
