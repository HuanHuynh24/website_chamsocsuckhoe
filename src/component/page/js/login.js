import React, { useState, useEffect } from "react";
import "../css/login.css";
import * as request from "../../../untils/request"

const Login = () => {
    const [formData, setFormData] = useState({
        idKhachhangdat:"",
        tenkhachhang:"",
        sdt:"",
        email:"",
        matkhau:""
        
    });
    const [formLogin, setFormlogin] = useState({
        username:"",
        password:""
    })
    const [Notification, setNotification] = useState(false)

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

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })

    }
    const handleChangeLogin = (e)=>{
        setFormlogin({
            ...formLogin,
            
            [e.target.name] :e.target.value
        })
    }
    const handleSuccess =()=>{
        setNotification(true)
        setFormData({
            idKhachhangdat:"",
            tenkhachhang:"",
            sdt:"",
            email:"",
            matkhau:""
            
        })
    }
    const handFailure = ()=>{
        console.log(formData)
        setNotification(false)
    }

    const handleSubmit = (e) => {  
        e.preventDefault(); 
        document.querySelector('#notification').style.display = "block"
       
        request
        .post('khachhang/signup', formData)
            .then(handleSuccess)
            .catch(handFailure)
    };

    const setCookie = (name, value, expirationDays)=>{
        const date = new Date();
        date.setTime(date.getTime() + (expirationDays * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
    const handleLoginResponse = (response)=>{
            alert("Đăng nhập thành công")
            setCookie("jwtToken", response, 10);
            window.location.reload();
    }
    const handleLogin = (e)=>{
        e.preventDefault(); 
        request
        .post('khachhang/login', formLogin)
            .then(
                (response) => handleLoginResponse(response)
            )
            .catch(
                (e)=>alert("Đăng nhập thất bại")
            )
    }

    

    return (
        <div className="login">
            <div className="container-login">
            <div className="form-container sign-up-container">
                <form onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <span>or use your email for registration</span>
                    <input type="text" name="idKhachhangdat" placeholder="Citizen identification code" value={formData.idKhachhangdat} onChange={handleChange}/>
                    <input type="text" name="tenkhachhang" placeholder="UserName" value={formData.tenkhachhang} onChange={handleChange}/>
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
                    <input type="tel" name="sdt" placeholder="Phone Number" value={formData.sdt} onChange={handleChange}/>
                    <input type="password" name="matkhau" placeholder="Password" value={formData.matkhau} onChange={handleChange}/>  
                    <button type="submit">Sign Up</button>
                    <p id="notification" style={{display:"none"}}>{Notification ?<span>Đăng ký thành công</span>:<span>Đăng ký thất bại</span>}</p>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form onSubmit={handleLogin}>
                    <h1>Sign In</h1>
                    <span>Enter the account you registered with</span>
                    <input type="text" name="username" placeholder="UserName/Phone/Citizen identification code"  value={formLogin.username} onChange={handleChangeLogin} />
                    <input type="password" name="password" placeholder="Password" value={formLogin.password} onChange={handleChangeLogin} /> 
                    <p id="notification" style={{display:"none"}}>{Notification ?<span>Đăng nhập thành công</span>:<span>Đăng nhập thất bại</span>}</p>
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay-login">
                    
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="press" id="signIn">Sign In</button>
                    </div>

                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="press" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
            </div>
        </div>        
    );
};

export default Login;


