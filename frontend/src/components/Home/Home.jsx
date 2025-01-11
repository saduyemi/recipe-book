import './Home.css';
import LoadingCircle from '../LoadingCircle/LoadingCircle'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router'
import { DataContext } from '../../App'
import DailyPlan from './DailyPlan/DailyPlan'
import Recents from './RecentsBlock/Recents'
import SideBar from '../SideBar/SiderBar'
import { useContext } from 'react';

export default function Home() {
    const { isAuthenticated, isLoading, user } = useAuth0();          
    const { userData } = useContext(DataContext);

    const navigate = useNavigate();

    if (isLoading || !userData.isCompleted) {
        return (<LoadingCircle/>);
    } else {

        if (!isAuthenticated) {
            navigate('/welcome');
        }
        
        return (
            isAuthenticated && <>
                <div id="homeRoot">
                    <SideBar/>
                    <div id="homeContainer">
                        <div id='container1'>
                            <DailyPlan/>
                        </div>
                        
                        <div id='container2'>
                            <TotalRecipes total={userData.data.feed.recipes.length}/> 
                            <Recents/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function TotalRecipes({total}) {
    return (
        <>
            <div id='totalContainer'>
                <p>Total Recipes:</p>
                <p style={{marginLeft: '0.5rem'}}>{total}</p>
            </div>
        </>
    )
}