import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './component/Home';
import Navbar from './component/Navbar';
import Single from './component/Single';

function App() {
 
  const url = "http://www.omdbapi.com/?apikey=2eaba7a8&";
  return (
    <>
     <Router>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/single/:id" element={<Single/>}></Route>
        </Routes>
     </Router>
    </>
  )
}

export default App
