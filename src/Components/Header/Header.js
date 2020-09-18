import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo.png';
import './Header.css';

const Header = (props) => {
    return (
        <nav className="nav">
                <ul>
                    <li>
                        <Link to="/"> 
                            <img style={{height:"60px"}} src={props.img || logo} alt=""/>
                        </Link>
                    </li>
                    <li>
                        <input className="search-input" type="text" placeholder="Search your destination" />
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/loginOrRegister"><Button className="login-btn">Login</Button></Link>
                    </li>
                </ul>
            </nav>
    );
};

export default Header;