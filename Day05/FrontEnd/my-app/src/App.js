import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FirstPage from "./components/FirstPage"
import { Login } from "./components/Login"
import { Home } from "./components/Home"
import { Welcome } from "./components/Welcome"
import { Register } from "./components/Register"

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/FirstPage' element={<FirstPage/>} />
            <Route path='/Register' element={<Register/>} />
            <Route path='/Welcome' element={<Welcome/>} />
                      {/* <Route path='/login' element={<LoginPage/>} />
                      <Route path='/register' element={<RegisterPage/>} />
                      <Route path='/forget-password' element={<ForgetPasswordPage/>} />
                     /* <Route element={<PrivateRoute />}></Route>
                      <Route path='/home' element={<HomePage/>} /> */}
          </Routes>
        </div>
      </Router>
  )
}

export default App;
