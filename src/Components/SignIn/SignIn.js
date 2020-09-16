import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import Header from '../Header/Header';
import googleIcon from '../../Images/google.png';
import fbIcon from '../../Images/fb.png';

const SignIn = () => {
    const [showArea] = useContext(MyContext);
    return (
            <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                url(${showArea.img})`, height: "140vh", backgroundSize: "cover", padding: "0 30px", color: "white" }}>
                <Header></Header>
                <div className="signIn">
                    <h3>Create an account</h3>
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                    <input type="text" placeholder="Email" />
                    <input type="password" name="" id="" placeholder="password" />
                    <input type="password" name="" id="" placeholder="Confirm password" />
                    <button>Create an account</button>
                    <p>Already have an account?<Link to="/login">Login</Link></p>
                </div>
                <b>or</b>
                <button><img src={googleIcon} alt=""/>Continue with Google</button>
                <button><img src={fbIcon} alt=""/>Continue with Facebook</button>
            </div>
    );
};

export default SignIn;