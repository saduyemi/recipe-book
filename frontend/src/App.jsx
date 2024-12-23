import { useState, useEffect, createContext, useContext } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Login from './components/Login';

export const LoginContext = createContext(null);

function App() {

  const isAuth = false;
  let defaultPath = <></>;

  if (isAuth) {
    defaultPath;
  } else {
    defaultPath = <Login />;
  }


  return (
    <>
    </>
  )
}

export default App
