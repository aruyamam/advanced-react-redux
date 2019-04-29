import React, { Component } from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { IFormProps } from '../../actions/types';

interface IProps {
   signup: typeof actions.signup;
}

class Signup extends Component<InjectedFormProps<IFormProps> & IProps> {
   onSubmit = (fromProps: IFormProps) => {
      this.props.signup(fromProps);
   };

   render() {
      const { handleSubmit } = this.props;

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
            <button>Sign Up!</button>
         </form>
      );
   }
}

export default compose<React.ComponentClass>(
   connect(
      null,
      actions
   ),
   reduxForm<IFormProps, IProps>({ form: 'signup' })
)(Signup);
