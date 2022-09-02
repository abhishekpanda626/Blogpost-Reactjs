import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import './Card.css';
function Editalbum()
{
 const[atitle,setTitle]=useState('');
 var albumid =JSON.parse(localStorage.getItem("albumid"));
 var userid=JSON.parse(localStorage.getItem("userId"))
 const navigate= useNavigate();
 
const[album,updateAlbum]=useState([]);
useEffect(()=>{
   updateAlbum(JSON.parse(localStorage.getItem("useralbum")));
 },[])
    const updateHandler=()=>{
      var update={userId:userid,id:albumid,title:atitle};
      //console.log(albumid)
      for(var i=0;i<album.length;i++)
      {
        // console.log(album[i])
         if(album[i].id===albumid)
         {
            
           //console.log(album[i])
           album[i]=update;
            localStorage.setItem("useralbum",JSON.stringify(album))
         }
      }
    //console.log(album)
       navigate('/profile/album');
    }
   
 return(
    <div className="App">
        <div className="update-form"> 
        <div className="editform" >
            <center><label htmlFor="upost" style={{marginBottom:'20px',fontSize:'30px', color:'#616161'}}>Update Album</label></center>
         <label id="postid">ALBUM-ID:{albumid}</label> <br />
         <label htmlFor="title">TITLE:</label> <br />
         <input type="text" id="title" className="upost" onChange={(e)=>setTitle(e.target.value)} /> <br />
        <center> <button className="btn btn-primary" onClick={()=>updateHandler()}  id="update">Update</button></center>
        </div>
        </div>
    </div>
 )
}
export default Editalbum