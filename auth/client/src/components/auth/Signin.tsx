import React, { Component } from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import * as actions from '../../actions';
import { IFormProps } from '../../actions/types';
import { IAppState } from '../../reducers';

interface IProps extends RouteComponentProps {
   errorMessage: string;
   signin: typeof actions.signin;
}

class Signin extends Component<InjectedFormProps<IFormProps> & IProps> {
   onSubmit = (fromProps: IFormProps) => {
      this.props.signin(fromProps, () => {
         this.props.history.push('/feature');
      });
   };

   public render() {
      const { errorMessage, handleSubmit } = this.props;

      return (
         <form onSubmit={handleSubmit(this.onSubmit)}>
            <fieldset>
               <label>Email</label>
               <Field
                  name="email"
                  type="text"
                  component="input"
                  autoComplete="none"
               />
            </fieldset>
            <fieldset>
               <label>Password</label>
               <Field
                  name="password"
                  type="password"
                  component="input"
                  autoComplete="none"
               />
            </fieldset>
            <div>{errorMessage}</div>
            <button>Sign In!</button>
         </form>
      );
   }
}

function mapStateToProps(state: IAppState) {
   return { errorMessage: state.auth.errorMessage };
}

export default compose<React.ComponentClass>(
   connect(
      mapStateToProps,
      actions
   ),
   reduxForm<IFormProps, IProps>({ form: 'signin' })
)(Signin);
