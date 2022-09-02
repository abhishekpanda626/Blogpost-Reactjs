import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
export default function Addpost()
{
    const[postbody,setBody]=useState('');
    const[posttitle,setTitle]=useState('');
    const[id,setID]=useState('');
    const[post,addPost]=useState([]);
   // var posttitle =localStorage.getItem("posttitle");
    const navigate= useNavigate();
    const userid=JSON.parse(localStorage.getItem("userId"))
    useEffect(()=>{
      addPost(JSON.parse(localStorage.getItem("userpost")));
    },[])
   
    const addHandler=()=>{
        var addnew={
            userId:userid,
            id:id,
            title:posttitle,
            body:postbody 
        }
       post.push(addnew)
      console.log(post)
       localStorage.setItem("userpost",JSON.stringify(post))
      navigate("/profile")
    }
    function loadHandler()
    {
        var len;
        for(var i=1;i<post.length;i++)
        {
            len=post[i].id;
           
        }
        console.log(len)
        setID(len+1)
       console.log(id)

    }
 return(
    <div className="App" onChange={loadHandler}>
        <div className="update-form"> 
        <div className="editform" >
            <center><label htmlFor="upost" style={{marginBottom:'20px',fontSize:'30px', color:'#616161'}}>Add a new post</label></center>
         <label id="postid">POST-ID:</label> <br />
         <input type="text" id="posttitle" className="upost" value={id} disabled  /> <br />
         <label htmlFor="title">TITLE:</label> <br />
         <input type="text" id="posttitle" className="upost"  onChange={(e)=>setTitle(e.target.value)} /> <br />
         <label htmlFor="body">BODY:</label> <br />
         <input type="text" className="area" id="postbody"  onChange={(e)=>setBody(e.target.value)}  />  <br />
         
        <center> <button className="btn btn-primary" onClick={()=>addHandler()}  id="update">Add</button></center>
        </div>
        </div>
    </div>
 )
}