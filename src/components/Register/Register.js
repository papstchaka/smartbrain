import React, { Component } from 'react';
import "../Navigation/Navigation.css"

class Register extends Component {
    constructor(props) {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            passwordValidation: "",
        }
        this.message = "";
    }

    validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };
    
    handleKeyPress = (event) => {
        if (event.key === "Enter") {
            this.onSubmitSignIn()
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }
    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }
    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }
    onPasswordValidationChange = (event) => {
        this.setState({passwordValidation: event.target.value});
    }

    onSubmitSignIn = () => {
        this.message = "";
        if (this.state.password !== this.state.passwordValidation) {
            this.message = "Passwords do not match";
            this.props.onRouteChange("register");
        }
        if (this.state.password.length < 4) {
            this.message = "Password must at least contain 4 letters";
            this.props.onRouteChange("register");
        }
        if (!this.validateEmail(this.state.email)) {
            this.message = "Email Adress has invalid format";
            this.props.onRouteChange("register");
        }
        if (!this.state.email) {
            this.message = "Email Adress is missing";
            this.props.onRouteChange("register");
        }
        if (this.message === "") {
            fetch('https://strawberry-pie-56167.herokuapp.com/register', {
                method: "post",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password
                })
            })
                .then(response => response.json())
                .then(user => {
                    if (user.id) {
                        this.props.loadUser(user);
                        this.props.onRouteChange('home');
                    }
                    else {
                        this.message = "";
                        if (!this.state.name) {
                            this.message = "Name is missing";
                        }
                        if (!this.state.email) {
                            this.message = "Email Adress is missing";
                        }
                        if (!this.state.password) {
                            this.message = "Password is missing";
                        }
                        if (!this.message) {
                            this.message = "User is already existing!"
                        }
                        if (!this.validateEmail(this.state.email)) {
                            this.message = "Email Adress has invalid format";
                        }
                        this.props.onRouteChange('register');
                    }
                });
        }
    }

    render() {        
        return (
            <article className="br3 ba b--white-10 mv4 shadow-5 w-100 w-50-m w-25-l mw6 center mysignin">
                <main className="pa4 white-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <p style={{color: "red"}}>{this.message}</p>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="text" 
                                    name="name"  
                                    id="name"
                                    onKeyPress={this.handleKeyPress}
                                    onChange={this.onNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address" 
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
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password-validation">Password Validation</label>
                                <input 
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password-validation"  
                                    id="password-validation"
                                    onKeyPress={this.handleKeyPress}
                                    onChange={this.onPasswordValidationChange}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                                onClick={this.onSubmitSignIn}
                                className="cta-btn cta-btn--hero cta-btn--login" 
                                type="submit" 
                                value="Register"
                            />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;