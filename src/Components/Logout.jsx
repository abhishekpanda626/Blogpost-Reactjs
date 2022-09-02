import React,{ useEffect } from "react";
//import * as ReactBootStrap from "react-bootstrap";
import { useNavigate } from "react-router-dom";
 function Logout()
{
    useEffect(()=>{
        document.getElementById('home').style.display='flex';
        document.getElementById('album').style.display='none';
        document.getElementById('allpost').style.display='none';
        document.getElementById('collasible-nav-dropdown').style.display='none';
        document.getElementById('album').style.display='flex';
        document.getElementById('allpost').style.display='flex';
      },[])
    const navigate=useNavigate();
    useEffect(()=>{window.localStorage.removeItem("index");
    window.localStorage.removeItem("userpost");
    
    window.localStorage.setItem("isauthenticated",false);
   
    navigate('/users')
    
})
    
    
   
return(
    <>
    {alert("You've Logged out.......")}
    </>
       )
       }
       export default Logout;