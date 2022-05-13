import './App.css';
import Signup from './Signup';
import React, {useState, useEffect} from 'react';
import Main from './Main';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Contact from './Contact';
import WatchList from './WatchList';
import {UserProvider} from './Context/user'


function App() {
    const [currentUser, setCurrentUser] = useState(null)
    const [watchList, setWatchList] = useState([])

<<<<<<< HEAD

    // console.log(watchList)
=======
    
>>>>>>> 2379def26af288cffa73501bb718629d1054e17c


   
   
    return (
        <UserProvider>
        <div className='App'>
            <Router>
                <Routes>
                    <Route path="/" element={<Signup onLogin={setCurrentUser}/>} currentUser={currentUser}/>
                    <Route path="/main" element={<Main setWatchList={setWatchList}/>} />
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/watchlist" element={<WatchList watchList={watchList}/>}/>
                    
                </Routes>
            </Router>
        </div>
        </UserProvider>
    );
}
export default App;