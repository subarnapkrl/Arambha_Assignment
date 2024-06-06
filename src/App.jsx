import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import MainPage from './pages/MainPage';
import Progress from './pages/Progress';


function App() {
  

  return (
     <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </Router>
     
  )
}

export default App
