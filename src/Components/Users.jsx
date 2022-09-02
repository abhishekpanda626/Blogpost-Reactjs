import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function User(){
    const [users,setUsers]=useState([]);
    const navigate= useNavigate();
    localStorage.clear();
    useEffect(()=>{
      document.getElementById('home').style.display='flex';
      document.getElementById('album').style.display='none';
      document.getElementById('allpost').style.display='none';
      document.getElementById('collasible-nav-dropdown').style.display='none';
    },[])
    useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/users`)
			.then(res => {
        //console.log(res)
        setUsers(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	} )     
    const profileClick=(e,data)=>{
        localStorage.setItem("index",JSON.stringify(data.id))
        navigate('/login')
    }
    const showUser=()=>
    {
      return(
        <div className="App">
        <div className="clearfix" >
          <div className='container-fluid'>
          <center >
            <h1 style={{color:'violet', }}>All Users</h1>
          </center>
          </div>
        <div className="row ">
          {users && users.map(data => (
            <div className="col-md-4 animated fadeIn " key={data.id} style={{padding:"10px"}}>
              <div className="card" style={{background:'#FBEAEB', color:'#101820FF'}}>
                <center><h5 className='card-title card-text p-4 mb-2 ' style={{background:'#2F3C7E',color:'white'}}  >User:- {data.id}</h5></center>
                <div className="card-body " >
                   <center> <h3> {data.name}</h3></center> 
                </div>
                <div>
                   <center><button onClick={e=>{profileClick(e,data)}} className="btn btn-success btn-md" >Log-In </button></center> 
                </div>
              </div>
            </div>
          ))}
        </div>
    
      </div>
      </div>
      )
    }

    return(
      
    showUser()
      
        
    )
    }
