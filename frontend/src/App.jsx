import { useState, useEffect, createContext, useContext } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Recipe from './components/RecipeBook/Recipe'
import Reminders from './components/Reminders/Reminders'
import Settings from './components/Settings/Settings'

export const LoginContext = createContext(null);

function App() {

  const isAuth = false;
  let defaultPath = <></>;

  if (isAuth) {
    defaultPath = <Home/>;
  } else {
    defaultPath = <Login/>;
  }


  return (
    <>
      <LoginContext.Provider value={{}}>
        <Router>

          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<SignUp/>} />

            <Route path='/' element={<Login/>} />
            <Route path='/home' element={<Home/>} />  
            <Route path='/recipes' element={<Recipe/>} />
            <Route path='/reminders' element={<Reminders/>} />
            <Route path='/settings' element={<Settings/>} />
          </Routes>
        </Router>
      </LoginContext.Provider>
    </>
  )
}

export default App
