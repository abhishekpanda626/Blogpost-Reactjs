import React,{useState, useEffect} from 'react';
import axios from 'axios';
function Comments() {
  useEffect(()=>{document.getElementById('navbar').style.display='box'},[])
    const [comments, setComments]=useState([]);
    const index=localStorage.getItem("index");
    //console.log("index",index);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments/?postId=${index}`)
        .then(res=>{
            setComments(res.data);
           // console.log(comments)
        })
        .catch(err=>{
            console.log(err);
        },[])
})
  return (
    <div className='App'>
     <div>
     <div className="row ">
          {comments && comments.map(data => (
            <div className="col-md-4 animated fadeIn " key={data.id} style={{padding:"10px"}}>
              <div className="card" style={{background:'#330066', color:'#00FF00'}}>
                <center><h5 className='card-title card-text p-4 mb-2 bg-danger text-white'  >Comment:- {data.id}</h5></center>
                <div className="card-body text-white" >
                   <center> Name: <h4> {data.name}</h4></center>
                   <center> Email-id: <h4> {data.email}</h4></center> 
                </div>
                <div>
                <center> <h5> Comment</h5></center>
                   <p>
                    {data.body}
                    </p> 
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>   
            
    </div>
  )
}

export default Comments