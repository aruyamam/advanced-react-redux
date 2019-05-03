import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

interface IProps {
   signout: typeof actions.signout;
}

class Signout extends Component<IProps> {
   public componentDidMount() {
      this.props.signout();
   }

   public render() {
      return <div>Sorry to see you go</div>;
   }
}

export default connect(
   null,
   actions
)(Signout);
