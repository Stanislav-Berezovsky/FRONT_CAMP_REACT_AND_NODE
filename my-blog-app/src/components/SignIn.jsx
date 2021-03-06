import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SignUp from './SignUp';
import axios from 'axios';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.signIn = this.signIn.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        return (
            <div>
                <form className="form-signin">
                    <h2 className="form-signin-heading"> Please sign in </h2>
                    <label htmlFor="inputEmail" className="sr-only"> Email address
                    </label>
                    <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control"
                           placeholder="Email address" required
                           autoFocus/>
                    <label htmlFor="inputPassword" className="sr-only"> Password</label>
                    <input type="password" onChange={this.handlePasswordChange} id="inputPassword"
                           className="form-control"
                           placeholder="Password" required/>
                    <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button"> Sign in
                    </button>
                </form>
                <br/>
                <div>
                    <Link to="/signup">{'SignUp'}</Link>
                </div>
            </div>
        )
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value})
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    }

    signIn() {
        console.log('Email address is ' + this.state.email + ' Password is ' + this.state.password);
    }
}

export default SignIn;