import './SideBar.css'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router'

export default function SideBar() {
    const { isAuthenticated, isLoading, user, loginWithRedirect, logout } = useAuth0();
    const navigate = useNavigate();

    if (isLoading) {
        return <div><p>Loading....</p></div>
    }

    return (
        <>
            <div id='sidebar'>
                <ul id='sidelist'>
                    <li onClick={() => navigate('/home')}><p>Home</p></li>
                    <li onClick={() => navigate('/recipes') }><p>Recipes</p></li>
                    <li onClick={() => navigate('/reminders')}><p>Reminders</p></li>
                </ul>
            </div>
        </>
    );
} 