import {BrowseRouter as Router, Route, Routes} from "react-router-dom"

function App() {

  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>}/> 
        <Route path="/talleres" element={<Talleres/>}/> 
        <Route path="/informes" element={<Informes/>}/> 
        <Route path="/clases" element={<Clases/>}/> 
      </Routes>
      
    </Router>
  )
}

export default App
