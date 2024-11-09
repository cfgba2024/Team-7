import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import React from "react"
import Home from "./views/Home"
import Talleres from "./views/Talleres"
import Informes from "./views/Informes"
import Clases from "./views/Clases"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import LoginForm from "./Login"
import Formulario from "./components/Formulario"


function App() {

  return (
    <>
    <Router>
      
      
      <Routes>

        <Route path="/" element={<Home/>}/> 
         <Route path="/talleres" element={<Talleres/>}/> 
        <Route path="/informes" element={<Informes/>}/> 
        <Route path="/clases" element={<Clases/>}/>  
        <Route path="/login" element={<LoginForm/>}/> 
        <Route path="/formulario" element={<Formulario/>}/> 
      </Routes>
      
    </Router></>
  )
}

export default App
