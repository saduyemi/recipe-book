import './Home.css';
import LoadingCircle from '../LoadingCircle/LoadingCircle'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router'
import DailyPlan from './DailyPlan/DailyPlan'
import Recents from './RecentsBlock/Recents'
import SideBar from '../SideBar/SiderBar';

export default function Home() {
    const { isAuthenticated, isLoading, user } = useAuth0();          
   
  
    const navigate = useNavigate();

    if (isLoading) {
        return (<LoadingCircle/>);
    } else {

        if (!isAuthenticated) {
            navigate('/welcome');
        }

        const userMetadata = user['https://recipes.com/user_metadata'];
        

        return (
            isAuthenticated && <>
                <div id="homeRoot">
                    <SideBar/>
                    <div id="homeContainer">
                        <div id='container1'>
                            <DailyPlan/>
                        </div>
                        
                        <div id='container2'>
                            <TotalRecipes/> 
                            <Recents/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function TotalRecipes() {
    return (
        <>
            <div id='totalContainer'>
                <p>Total Recipes:</p>
                <p style={{marginLeft: '0.5rem'}}>0</p>
            </div>
        </>
    )
}