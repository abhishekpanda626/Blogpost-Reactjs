import React,{useState,useEffect} from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {Link} from "react-router-dom";
import './Card.css';
function Home (){
 
  
    const [isauth, setisAuth]=useState();
    
    useEffect(() => {
      setisAuth( window.localStorage.getItem("isauthenticated"));
   }, [])
 
   useEffect(()=>{document.getElementById('navbar').style.display='box'},[])
 console.log("authenticated",typeof isauth)
    return(
      
        <div className="App" id="navbar">
          
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="success" variant="dark"  id="navbar">
      
  <ReactBootStrap.Navbar.Brand  >JSONblogspot.com</ReactBootStrap.Navbar.Brand>

  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    <Link style={{textDecoration:'none'}} to="/home">
    <ReactBootStrap.Nav.Link href="#home"
    style={{  display: isauth===true? "none" : "flex", }}
     id="home"  >HOME</ReactBootStrap.Nav.Link>
    </Link>
    <Link style={{textDecoration:'none'}} id="album" to="/albums" >
    <ReactBootStrap.Nav.Link href="#albums"  >Albums</ReactBootStrap.Nav.Link>
    </Link>
    <Link style={{textDecoration:'none'}} id="allpost" to="/allposts">
    <ReactBootStrap.Nav.Link href="#allpost" >Posts</ReactBootStrap.Nav.Link>
    </Link>
      <ReactBootStrap.NavDropdown title="Dashboard" id="collasible-nav-dropdown" className='dashboard' >
        <Link style={{textDecoration:'none'}} to="/profile" id="profile">
        <ReactBootStrap.NavDropdown.Item href="#profile">Profile</ReactBootStrap.NavDropdown.Item>
        </Link>
        <Link style={{textDecoration:'none'}}  to="/logout" id='logout'>
        <ReactBootStrap.NavDropdown.Item href="#logout">Log out</ReactBootStrap.NavDropdown.Item>
        </Link>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default Home;