import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { IAppState } from '../reducers';
import './HeaderStyle.css';

interface IProps {
   authenticated: string | null;
}

export class Header extends Component<IProps> {
   public render() {
      return (
         <div className="header">
            <Link to="/">Redux Auth</Link>
            {this.renderLinks()}
         </div>
      );
   }

   private renderLinks() {
      if (this.props.authenticated) {
         return (
            <div>
               <Link to="/signout">Sign Out</Link>
               <Link to="/feature">Feature</Link>
            </div>
         );
      }

      return (
         <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
         </div>
      );
   }
}

function mapStateToProps(state: IAppState) {
   return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
