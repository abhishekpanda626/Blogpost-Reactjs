import Auth from './Components/Auth';
import React, { useState, useEffect } from 'react';
import Allpost from './Components/Data';
import "bootstrap/dist/css/bootstrap.min.css";
import Post from './Components/Post';
import {BrowserRouter as Router,Routes,Route, } from "react-router-dom";
import Profile from './Components/Profile';
import Home from './Components/Home';
import User from './Components/Users';
import Logout from './Components/Logout';
import Comments from './Components/Comments';
import Album from './Components/Album';
import Allalbum from './Components/Allalbums';
import Editpost from './Components/Editpost';
import Editalbum from './Components/Editalbum';
import Addpost from './Components/Addpost';

function App() {
 
  const [isAuthenticated, setIsAuthenticated]=useState(true);
 const [isAuth,setIsAuth]=useState();

    useEffect(() => {
        window.localStorage.setItem("isauthenticated",isAuthenticated);
    }, [isAuthenticated])
   useEffect(()=>
   {
    setIsAuth(JSON.parse(window.localStorage.getItem("isauthenticated")))
   })
   
 return (
    <div className="App">
      
      <Router>
    <Home />
   <Routes>
      
      <Route path="/" element={<User/>}/>
      <Route path="/albums" element={ <Allalbum/>}/>
      <Route path="/addpost" element={ <Addpost/>}/>
      <Route path="/updatepost" element={ <Editpost/>}/>
      <Route path="/updatealbum" element={ <Editalbum/>}/>
      <Route path="/profile/album" element={ <Album/>}/>
      <Route path="/comments" element={<Comments />}/>
      <Route path="/profile/userposts" element={<Post />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/profile1" element={<Profile />}/>
      <Route path="/allposts" element={  <Allpost/>}/>
      <Route path="/login" element={<Auth />}/>
      <Route path="/logout" element={ <Logout />}/>
      <Route path="/home" element={ <User />}/>
      <Route path="/users" element={ <User />}/>
      <Route path="/users" element={ <User />}/>
      
    </Routes>
</Router>
</div>
  );
}

export default App;
