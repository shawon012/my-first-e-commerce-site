import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext)
    console.log(user)
    const handleLogout = () =>{
        
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
           <div>
             <Link to="/">Shop</Link>
             <Link to="/order">Order</Link>
             <Link to="/inventory">Inventory</Link>
             <Link to="/login">Login</Link>
             <Link to="/signup">SignUp</Link>
             {user && <span>Welcome {user.email} <button onClick={handleLogout} >SignOut</button> </span>}
           </div>
        </nav>
    );
};

export default Header;