import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { IAppState } from '../reducers';

interface IProps extends RouteComponentProps {
   auth: string | null;
}

const requireAuth = (ChildComponent: React.ComponentType) => {
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

   function mapStateToProps(state: IAppState) {
      return { auth: state.auth.authenticated };
   }

   return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;
