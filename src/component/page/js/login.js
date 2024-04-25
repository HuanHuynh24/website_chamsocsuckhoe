import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import "../css/login.css";
class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content">
                        <div className="row">
                            <div className="col-12 text-login">Login</div>
                        </div>
                        <div className="row">
                            <div className="col-12 form-group login-input">
                                <div><label>Username</label></div>                              
                                <input type="text" className="form-control" placeholder="Enter your username" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 form-group login-input">
                                <div><label>Password</label></div>                             
                                <input type="password" className="form-control" placeholder="Enter your password" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 login-input">
                                <button className="btn btn-login">Login</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <span className="forgot-password">Forgot your Password</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center mt-3">
                                <span className="text-other-login">Or login with:</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="social-login">
                            <FontAwesomeIcon icon={faGooglePlusG} className="google" />
                    
                            <FontAwesomeIcon icon={faFacebookF} className="facebook" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
