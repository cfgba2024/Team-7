import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import LoginForm from "./Login"

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route  path="/" element={<Home/>}/>  */}
        {/* <Route path="/talleres" element={<Talleres/>}/> 
        <Route path="/informes" element={<Informes/>}/> 
        <Route path="/clases" element={<Clases/>}/>  */}
        <Route path="/login" element={<LoginForm/>}/> 
      </Routes>
      
    </Router>
  )
}

export default App
