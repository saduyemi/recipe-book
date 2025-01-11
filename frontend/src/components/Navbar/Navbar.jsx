import './Navbar.css'
import { useAuth0 } from '@auth0/auth0-react';

export default function Navbar() {
    const { isAuthenticated, isLoading, user, loginWithRedirect, logout } = useAuth0();
    
    function handleLogin() {
        console.log(import.meta.env.VITE_AUTH0_DOMAIN);
        console.log(import.meta.env.VITE_AUTH0_CLIENT_ID);
        loginWithRedirect();
    }

    function handleOut() {
        logout({logoutParams: {returnTo: `${window.location.origin}/welcome`}});
    }
    if (isLoading) {
        return <div><p>Loading....</p></div>
    }
    return (
        <>
            <div id='navbar'>
                <p id='title'>Recipe Book</p>

                <ul id='navlist'>
                    {isAuthenticated && <li><p>{`Welcome ${user.email}`}</p></li>}
                    {isAuthenticated && <li><button className='navBtn'>Settings</button></li>}
                    {(isAuthenticated) ? <li><button className='navBtn' onClick={() => handleOut()}>Sign Out</button></li> : <li><button className='navBtn' onClick={() => handleLogin()}>Sign In</button></li>}
                </ul>
            </div>
        </>
    );
} 