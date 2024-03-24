import React from 'react'
import News  from './Components/News';
import Navbar from './Components/Navbar';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";






 const App=() =>{
 
    return (
      
        <div>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/business" element={<News key="business" category="business" country="in" />} />
            <Route path="/entertainment" element={<News key="entertainment" category="entertainment" country="in" />} />
            <Route path="/general" element={<News key="general" category="general" country="in" />} />
            <Route path="/health" element={<News key="health" category="health" country="in" />} />
            <Route path="/science" element={<News key="science" category="science" country="in" />} />
            <Route path="/sports" element={<News key="sports" category="sports" country="in" />} />
            <Route path="/technology" element={<News key="technology" category="technology" country="in" />} />


          </Routes>
          </Router>
        </div>
     
    )
  
}

export default App