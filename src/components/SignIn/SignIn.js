import React, { Component } from 'react';
import "../Navigation/Navigation.css"

class SignIn extends Component {
    constructor(props) {
        super();
        this.state = {
            signInEmail: "",
            signInPassword: "",
        }
        this.message = "";
    }

    handleKeyPress = (event) => {
        if (event.key === "Enter") {
            this.onSubmitSignIn()
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }

    onSubmitSignIn = () => {
        fetch('https://strawberry-pie-56167.herokuapp.com/signin', {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
                else {
                    this.message = "wrong credentials";
                    this.props.onRouteChange('signin');
                }
            });
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba b--white-10 mv4 shadow-5 w-100 w-50-m w-25-l mw6 center mysignin">
                <main className="pa4 white-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <p style={{color: "red"}}>{this.message}</p>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" name="email-address"  
                                    id="email-address"
                                    onKeyPress={this.handleKeyPress}
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password"  
                                    id="password" 
                                    onKeyPress={this.handleKeyPress}
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                                onClick={this.onSubmitSignIn}
                                className="cta-btn cta-btn--hero cta-btn--login" 
                                type="submit" 
                                value="Sign in"
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p 
                                onClick={() => onRouteChange('register')} 
                                className="btn-register">
                                    Register
                            </p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default SignIn;