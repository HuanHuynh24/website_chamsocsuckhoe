import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import "../css/login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {      
        console.log("Username:", username);
        console.log("Password:", password);
    };

    return (
        <div className="login-background">
            <div className="login-container">
                <div className="login-content">
                    
                    <div className="row">
                        <div className="col-12 text-login">Login</div>
                    </div>

                    <div className="row">
                        <div className="col-12 form-group login-input">
                            <div><label htmlFor="username">Username</label></div>                              
                            <input
                                type="text"
                                id="username"
                                className="form-control"
                                placeholder="Enter your username"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 form-group login-input">
                            <div><label htmlFor="password">Password</label></div>                             
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter your password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 login-input">
                            <button className="btn btn-login" onClick={handleLogin}>
                                Login
                            </button>
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
};

export default Login;


