import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import './Card.css';
function Editpost()
{
    
const[postbody,setBody]=useState('');
 const[posttitle,setTitle]=useState('');
 var postid =JSON.parse(localStorage.getItem("postid"));
 var userid =JSON.parse(localStorage.getItem("userId"));
 const[post,updatePost]=useState([]);
 //const[update,setUpdate]=useState([]);

 const navigate= useNavigate();
 useEffect(()=>{
   updatePost(JSON.parse(localStorage.getItem("userpost")));
 },[])

    const updateHandler=()=>{
   
      var update={userId:userid,id:postid,title:posttitle,body:postbody};
      for(var i=1;i<post.length;i++)
      {
          if(post[i].id===postid)
         {
           
            post[i]=update;
            localStorage.setItem("userpost",JSON.stringify(post))
         }
      }
    
      
        
      navigate("/profile")
     
   }
   
 return(
    <div className="App">
        <div className="update-form"> 
        <div className="editform" >
            <center><label htmlFor="upost" style={{marginBottom:'20px',fontSize:'30px', color:'#616161'}}>Update post</label></center>
         <label id="postid">POST-ID:{postid}</label> <br />
         <label htmlFor="title">TITLE:</label> <br />
         <input type="text" id="posttitle" className="upost"  onChange={(e)=>setTitle(e.target.value)} /> <br />
         <label htmlFor="body">BODY:</label> <br />
         <input type="text" className="area" id="postbody"  onChange={(e)=>setBody(e.target.value)}  />  <br />
         
        <center> <button className="btn btn-primary" onClick={()=>updateHandler()}  id="update">Update</button></center>
        </div>
        </div>
    </div>
 )
}
export default Editpost