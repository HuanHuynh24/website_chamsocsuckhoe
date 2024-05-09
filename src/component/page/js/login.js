import React, { useState, useEffect } from "react";
import "../css/login.css";
import * as request from "../../../untils/request"
import { CgPassword } from "react-icons/cg";

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
        setNotification(false)
    }

    const handleSubmit = (e) => {  
        e.preventDefault(); 
        console.log(formData)
        document.querySelector('#notification').style.display = "block"
       
        request
        .post('khachhang/signup', formData)
            .then(handleSuccess)
            // .then((e)=> console.log(e))
            .catch(handFailure)
    };

    const handleLogin = (e)=>{
        e.preventDefault(); 
        request
        .post('khachhang/login', formData)
            .then(handleSuccess)
            // .then((e)=> console.log(e))
            .catch(handFailure)
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
                    <span>or use your account</span>
                    <input type="text"  placeholder="UserName/Phone/Citizen identification code"  value={formLogin.username} onChange={handleChangeLogin} />
                    <input type="password" placeholder="Password" value={formLogin.password} onChange={handleChangeLogin} /> 
                    <button type="submit">Sign In</button>
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


