import React, { Component } from 'react';
import { Field, reduxForm, InjectedFormProps, FormProps } from 'redux-form';

class Signup extends Component<InjectedFormProps> {
   onSubmit = (fromProps: object) => {
      console.log(fromProps);
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

export default reduxForm({ form: 'signup' })(Signup);
