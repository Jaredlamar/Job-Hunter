import './App.css';
import Signup from './Signup';
import React, {useState} from 'react';
import Main from './Main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
    const [currentUser, setCurrentUser] = useState(null)
   
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Signup onLogin={setCurrentUser}/>} />
                    <Route path="/main" element={<Main />}/>
                    
                </Routes>
            </Router>

          
        </>
    );
}
export default App;