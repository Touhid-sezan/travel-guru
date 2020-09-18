import { FormGroup } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import googleIcon from '../../Images/google.png';
import fbIcon from '../../Images/fb.png'; 
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import './LoginRegister.css';
const LoginRegister = () => {

    const [showSpot,setShowSpot,loggedIn,setLoggedIn,name, setName]=useContext(UserContext)

    const [confirmationError, setConfirmationError]=useState(false)
    const [isSignedUp, setisSignedUp]=useState(false)
    const [consumer, setConsumer]=useState("")
    const [user, setUser]=useState({})
    const location=useLocation().location?.pathname
    const history=useHistory()



    const formHandler=(event)=>{
        event.preventDefault()
            
//REgister with Email and Password
            if(consumer === "signup") {
                user.password==user.confirmationPassword ?
                firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
                .then(res=>{
                setConfirmationError(false)
                setUser({...user, signupError:""})
                    setisSignedUp(true)
                })
                .catch(err=>{
                    setUser({...user, signupError:err.message})
                })
                : setConfirmationError(true)
        
            }
        
    
// Login with Email and Password

        consumer === "signin" &&
        firebase.auth().signInWithEmailAndPassword(user.email,user.password)
        .then(res=>{
            const currentUser = firebase.auth().currentUser;
            setName(currentUser.displayName)
            setLoggedIn(true)
            history.replace(location || "/")
        })
        .catch(err=>{
            setUser({...user, signinError:err.message})
        })
        
    }

// Handle Facebook Login
    const handleFbLogin =()=>{
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider)
        .then(res=>{
            const currentUser = firebase.auth().currentUser;
            setName(currentUser.displayName)
            setLoggedIn(true)
            history.replace(location || '/')
        })
        .catch(err=>{
            setUser({...user, signinError:err.message})
        })
    }

// Handle Google Login
    const handleGoogleLogin =()=>{
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then(res=>{
            const currentUser = firebase.auth().currentUser;
            setName(currentUser.displayName)
            setLoggedIn(true)
            history.replace( '/hotel')
        })
        .catch(err=>{
            setUser({...user, signinError:err.message})
        })
    }


// Login and Register toggle
    const toggleToLogin=()=>{
        setisSignedUp(true)
        setConfirmationError(false) 
        setUser({...user, signupError:""})
    }

    const toggleToRegister=()=>{
        setisSignedUp(false)
        setUser({...user, signinError:""})
    }
   


    return (
        <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${showSpot.img})`, height: "140vh", backgroundSize: "cover", padding: "0 30px", color: "black", textAlign:"center" }}> 
            <Header></Header>
            <form onSubmit={formHandler} className="form-group" style={{width:"600px", margin:"auto", background:"white", padding:"20px"}}> 
                <FormGroup>
                    {
                        isSignedUp? <h2 style={{textAlign:"left"}}>Login</h2>
                        : <h2 style={{textAlign:"left"}}>Create an account</h2>
                    }

                    {
                        !isSignedUp && <>
                            <input onBlur={(event)=>setUser({...user,fname:event.target.value})}
                                id="input-style" type="text" placeholder="First name" required/>
                            <input onBlur={(event)=>setUser({...user,lname:event.target.value})}
                                id="input-style" type="text" placeholder="Last name" required/>
                        </> 
                    }

                    <input onBlur={(event)=>setUser({...user,email:event.target.value})}
                        id="input-style" type="email" placeholder="Email address" required/>

                    <input onBlur={(event)=>setUser({...user,password:event.target.value})}
                        id="input-style" type="password" placeholder="Password" required/>
                    {
                        !isSignedUp && 
                            <input onBlur={(event)=>setUser({...user,confirmationPassword:event.target.value})}
                            id="input-style" type="password" placeholder="Confirm Password" required/>
                    }

                    {
                        isSignedUp && 
                            <div style={{display:"flex", justifyContent:"space-between", fontSize:"13px", fontWeight:"500"}}>
                                <div style={{display:"flex", alignItems:"center"}}>     
                                    <input id="checkbox" type="Checkbox" />
                                    <label for="checkbox" style={{marginLeft:"10px", marginTop:"-7px"}}>
                                        Remember me
                                    </label>
                                </div>
                                <p style={{color:"orange", cursor:"pointer"}}>Forgot Password</p>
                            </div>
                    }

                    {
                        user.signinError ?
                            <p style={{color:"red", fontSize:"13px"}}>
                                {user.signinError}
                            </p>
                        : ""
                    }
                    {
                         user.signupError ?
                            <p style={{color:"red", fontSize:"13px"}}>
                                {user.signupError}
                            </p>
                         : ""
                    }
                    {
                        confirmationError ?
                            <p style={{color:"red", fontSize:"13px"}}>
                                Doesn't match your password
                            </p>
                        : ""
                    }
                    {
                        isSignedUp ?
                        <input name="signin" type="submit" value="Login" 
                            onClick={(event)=>setConsumer(event.target.name)} />
                        : <input name="signup" type="submit" value="Create an account"
                            onClick={(event)=>setConsumer(event.target.name)} />
                    }
                </FormGroup>
                    {
                        isSignedUp ?
                            <>
                                <span>Don't have an account? </span>
                                <span onClick={toggleToRegister} 
                                    style={{color:"orange",cursor:"pointer"}}>Create an account</span>
                            </>
                        
                        :<>
                            <span>Already have an account? </span>
                            <span onClick={toggleToLogin} 
                                style={{color:"orange",cursor:"pointer"}}>
                                    Login
                            </span>
                        </>
                        
                    } 
            </form>

{/* Direct Login with Facebook and Google */}

           <div style={{width:"600px",background:"white", margin:"auto"}}>
                <p style={{textAlign:"center"}}> Or </p>

                <div onClick={handleFbLogin} style={{display:"flex", marginBottom:"20px"}}>
                    <img style={{width:"30px", height:"30px", marginLeft:"190px", cursor:"pointer"}} src={fbIcon} alt=""/>
                    <p style={{cursor:"pointer", marginLeft:"20px"}}>Continue with Facebook</p>
                </div>
                <div onClick={handleGoogleLogin} style={{display:"flex"}}>
                    <img style={{width:"30px", height:"30px", marginLeft:"190px", cursor:"pointer"}} src={googleIcon} alt=""/>
                    <p style={{cursor:"pointer", marginLeft:"20px"}}>Continue with Google</p>
                </div>

            </div>
        </div>
    );
};

export default LoginRegister;