import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import Header from '../Header/Header';


const Login = () => {
    const [showArea] = useContext(MyContext);
    return (
        <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${showArea.img})`, height: "140vh", backgroundSize: "cover", padding: "0 30px", color: "white" }}>

            <Header></Header>
            <div className="login-area">
                <h3>Login</h3>
                <input type="text" placeholder="username or email" />
                <input type="password" placeholder="password"/>
                <div className="other">
                    <input type="checkbox" name="remember" id="" />
                    <label htmlFor="remember">Remember me</label>
                    <a href="#">Forgot password</a>
                </div>
                <button>Login</button>
                <p>Don't have an account? <Link to="/signIn">Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;