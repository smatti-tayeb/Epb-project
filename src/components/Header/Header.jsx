import React,{useState,useEffect} from 'react';
import { Link , Outlet} from 'react-router-dom';
import'./Header.css';
import { useAuth } from '../../auth/authContext';

function Header() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const { signOut,user } = useAuth();
   
    useEffect( () => {
        
        if (user) {
            setIsAuthenticated(true)
      }
     
    }, [user])
    
    const handleSignOut = async() => {
        
       signOut();
     return setIsAuthenticated(false);
    };
    return (
        <><header className="site-header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2">

                    </div>
                    <div className="col-lg-10">

                        <div className="main-navigation">
                            <div className="header-logo">
                                <a href="index.html">
                                    <img src="assets/images/Logo-epb.png" width="50" height="50" alt="Logo" />
                                </a>
                            </div>
                            <button className="menu-toggle"><span></span><span></span></button>
                            <nav className="header-menu">
                                <ul className="menu food-nav-menu">
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/about'>about</Link></li>
                                    <li>
                                        {isAuthenticated ? (
                                            <div className="header-right">
                                                <span className='username'>{user.username}</span>
                                            </div>
                                        ) : (
                                            <Link to="/signin">Sign In</Link>
                                        )}</li>
                                    <li>
                                        {isAuthenticated ? (
                                            <button onClick={handleSignOut}>Sign Out</button>
                                        ) : (
                                            <Link to="/signUp">Sign Up</Link>
                                        )}</li>

                                </ul>
                            </nav>
                            {/* <div className="header-right">
     
        <a href="javascript:void(0)" className="header-btn">
            <i className="uil uil-user-md"></i>
        </a>
    </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </header><Outlet /></>
    );
    
}

export default Header;
