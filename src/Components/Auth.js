import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import validator from 'validator';
import {useNavigate } from "react-router-dom";
//import App from "../App";

function Auth()
{  
  
  const[isAuth,setIsAuth]=useState(false);
    
     const navigate = useNavigate();
    const [user,setUser] = useState([]);
    const [emailError, setEmailError] = useState('');
    const [pwdError, setPwdError]= useState('');
    var index=localStorage.getItem("index");
    
    useEffect(() => {  
		axios
			.get(`https://jsonplaceholder.typicode.com/users/?id=${index}`)
			.then(res => {
        
        setUser(res.data)
        
			})
			.catch(err => {
				console.log(err)
			})
	}, [])
  
  const emailHandler = (e,usermail) => {
    
    var email=e.target.value;
    if(!email){
      setEmailError('Email id is Required')
    }
    else if (!(validator.isEmail(email))) {
      setEmailError('Enter valid Email!')
    } 
    else if(email!==usermail){
      setEmailError("Incorrect email please try again")
    }
    
  } 
  const showHint=(userpassword)=>{
   
    document.getElementById("pwdhint").innerHTML="password hint:"+userpassword;
  }
 const passwordHandler = (e,userpassword) => {

    showHint(userpassword);
    var pwd=e.target.value;
   
    if(!pwd)
    {
      setPwdError('Password is Required')
      
    }
    else if(pwd!==userpassword)
    {
      setPwdError("Incorrect Password")
    }
  }
  const loginHandler = (e,usermail,userpassword) => {
    e.preventDefault();   

        showHint(userpassword);    
         //console.log(usermail, userpassword)
         let mail=document.getElementById('emailid').value
         let password=document.getElementById('password').value
         //console.log(mail, password)
         if(usermail===mail)
         {
          
             if(userpassword===password)
             {
              document.getElementById('home').style.display='none';
              document.getElementById('album').style.display='flex';
              document.getElementById('allpost').style.display='flex';
              document.getElementById('collasible-nav-dropdown').style.display='block';
              setIsAuth(true);
              console.log(isAuth);
             
              navigate('/profile');
             }
            else
         {
             alert("Incorrect password");
          
         }
         }
         else{
          alert("incorrect email address")
         }
        
 }
  const resetHandler=(e)=>{
    e.preventDefault();
    document.getElementById('emailid').value="";
    document.getElementById('password').value="";
    document.getElementById('emailhint').innerHTML="";
    document.getElementById('pwdhint').innerHTML="";
    document.getElementById('emailerr').innerHTML="";
    document.getElementById('pwderr').innerHTML="";
  }
  useEffect(()=>{
    
    window.localStorage.setItem("isauthenticated",true);
  }
  )
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${index}`)
      .then(res => {
        
        localStorage.setItem("userpost",JSON.stringify(res.data));
      })
      .catch(err => {
        console.log(err)
      })
  },[]) 
  const showEmail=(e,mailval)=>{
   
    console.log("mail",mailval)
  }
    return(
  <div className="container  " >
        <div className="row d-flex justify-content-center flex-column min-vh-100 align-items-center d-grid gap-3">
          <div className="col-md-4 border border-5 mx-auto p-2 bg-light border " >
          <center><h2 style={{color:"#0077ff", font:"Verdana"}}  >Log In</h2></center>
          {user&&user.map(data=>(
            <form id="loginform"  className="loginform1" key={data.id} >
              <div className="form-group ">
                <label className="text-info">Email</label>&nbsp;<span id="emailerr" className="text-danger form-text">
                  {emailError} </span>
                <input
                
                  type="email"
                  className="form-control"
                  id="emailid"
                  name="emailid"
                  aria-describedby="userHelp"
                  placeholder="Enter Email-id"
                  onBlur={(e)=>emailHandler(e,data.email)}
                  value={data.email}
                  
                  
                />
                <span id="emailhint"></span>
                
              </div>
              <div className="form-group  ">
                <label className="text-info">Password</label> 
                <span id="pwderr" className="text-danger form-text">{pwdError} </span>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  onBlur={(e)=>passwordHandler(e,data.username)}
                />
                <span id="pwdhint"></span>
                
              </div >
              <br/>
              <div >
            
             <center> <input type="submit"  onClick={(e)=>loginHandler(e,data.email,data.username)} id="LOGIN" className="btn btn-primary btn-md me-5" value="LOGIN"/>
             <input type="reset" id="RESET" onClick={resetHandler} className="btn btn-secondary btn-md me-3 " value="RESET"/>
             </center>
             </div>

            </form>
            ))}
          </div>
        </div>
    </div>
    );
}
export default Auth