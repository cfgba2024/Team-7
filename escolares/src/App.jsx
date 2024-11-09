import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import React from "react"
import Home from "./views/Home"
import Talleres from "./views/Talleres"
import Informes from "./views/Informes"
import Clases from "./views/Clases"
import Header from "./components/Header"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
         <Route path="/talleres" element={<Talleres/>}/> 
        <Route path="/informes" element={<Informes/>}/> 
        <Route path="/clases" element={<Clases/>}/>  
      </Routes>
      
    </Router></>
  )
}

export default App
