import { useState, useEffect, createContext } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { createCustomEvent } from '../public/customevent'
import useData from './hooks/useData'

import DefaultHandler from './components/DefaultHandler'
import SignUp from './components/SignUp/SignUp'
import Navbar from './components/Navbar/Navbar'
import SideBar from './components/SideBar/SiderBar'
import Home from './components/Home/Home'
import Welcome from './components/Welcome/Welcome'
import Recipe from './components/RecipeBook/Recipe'
import Reminders from './components/Reminders/Reminders'
import Settings from './components/Settings/Settings'

export const DataContext = createContext(null);

function App() {
  useEffect(() => {
    createCustomEvent('data', 'Event related to initialzing and refreshing user data for application');
  }, []);

  const userData = useData();

  return (
    <>
      <DataContext.Provider value={{userData}}>
       
        <Router>
          <Navbar/>
          {/* <SideBar/> */}
          <Routes>
            <Route path='/welcome' element={<Welcome/>} />
            <Route path='/signup' element={<SignUp/>} />

            <Route path='/' element={<DefaultHandler/>} />
            <Route path='/home' element={<Home/>} />  
            <Route path='/recipes' element={<Recipe/>} />
            <Route path='/reminders' element={<Reminders/>} />
            <Route path='/settings' element={<Settings/>} />
          </Routes>
        </Router>
      </DataContext.Provider>
    </>
  )
}

export default App
