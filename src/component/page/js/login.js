import React, { useState, useEffect } from "react";
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

    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.querySelector('.container-login'); 

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        })

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        })

        return () => {
            signUpButton.removeEventListener('click', () => {
                container.classList.add("right-panel-active");
            });

            signInButton.removeEventListener('click', () => {
                container.classList.remove("right-panel-active");
            });
        };
    }, []);

    return (
        <div className="login">
            <div className="container-login">
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="UserName" value={username} onChange={handleUsernameChange}/>
                    <input type="email" placeholder="Email"/>
                    <input type="tel" placeholder="Phone Number" />
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>  
                    <button onClick={handleLogin}>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Sign In</h1>
                    <span>or use your account</span>
                    <input type="text" placeholder="UserName" value={username} onChange={handleUsernameChange}/>
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/> 
                    <button onClick={handleLogin}>Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay-login">
                    
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome To FF!</h1>
                        <p>Please Subscribe and Support to our channel</p>
                        <button className="press" id="signIn">Sign In</button>
                    </div>

                    <div className="overlay-panel overlay-right">
                        <h1>Frontend Forever</h1>
                        <p>Learn web designing from here in tamil and english</p>
                        <button className="press" id="signUp">Sign In</button>
                    </div>
                </div>
            </div>
            </div>
        </div>        
    );
};

export default Login;


