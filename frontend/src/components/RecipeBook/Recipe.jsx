import './Recipe.css'
import { useContext } from 'react'
import { DataContext } from '../../App'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router'
import SideBar from '../SideBar/SiderBar'
import LoadingCircle from '../LoadingCircle/LoadingCircle'

export default function Recipe() {
    const { isLoading, isAuthenticated } = useAuth0();
    const { userData } = useContext(DataContext);
    const navigate = useNavigate();

    if (isLoading || !userData.isCompleted) {
        return <LoadingCircle/>
    }
    else {
        if (!isAuthenticated) { navigate('/welcome') }

        console.log(userData);
        return (
            <>
                <div id='recipeRoot'>
                    <SideBar/>
                    <div id='recipeContainer'>
                        <button>Add +</button>
                        <ul id='recipes-list'>
                            {userData.data.feed.recipes.map((aRecipe) => (
                                <li className='recipe-card' key={aRecipe._id}><p>{aRecipe.title}</p></li>
                            ))}
                        </ul>      
                    </div>
                </div>
            </>
        )
    }
}

/*
<div id='recipeContainer'>
    <ul id='recipes-list'>
        <li className='recipe-card'>
            <p>Chicken Tacos</p>
        </li>
        <li className='recipe-card'>
            <p>Chicken Tacos</p>
        </li>
        <li className='recipe-card'>
            <p>Chicken Tacos</p>
        </li>
        <li className='recipe-card'>
            <p>Chicken Tacos</p>
        </li>
        <li className='recipe-card'>
            <p>Chicken Tacos</p>
        </li>
        <li className='recipe-card'>
            <p>Chicken Tacos</p>
        </li>
        <li className='recipe-card'>
            <p>Chicken Tacos</p>
        </li>
        <li className='recipe-card'>
            <p>Chicken Tacos</p>
        </li>
    </ul>

    
    
</div>
*/ 