import React,{useState, useEffect} from 'react';
//import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Album() {
    //const index=localStorage.getItem("index");
   // var editTitle=localStorage.getItem("atitle");
//    var data;
    const navigate=useNavigate();
    useEffect(()=>{document.getElementById('navbar').style.display='box'},[])
    const [albums, setAlbums]=useState([]);
    
useEffect(()=>{
  setAlbums(JSON.parse(localStorage.getItem("useralbum")))
},[])
const editHandler=(albumid)=>{
  localStorage.setItem("albumid",albumid);
  navigate('/updatealbum');
}

const deleteHandler=(albumid)=>{
  const delalbum=albums.filter((item)=>item.id!==albumid);
  console.log("album data:",delalbum)
  console.log(albums)
  setAlbums(delalbum);
  localStorage.setItem("useralbum",JSON.stringify(albums))
}
  return (
    <div className='App'>
     <div>
     <div className="row ">
          {albums && albums.map(data => (
            <div className="col-md-4 animated fadeIn " key={data.id} style={{padding:"10px"}}>
              <div className="card" style={{background:'#CCF381', color:'#4831D4'}}>
                <center><h5 className='card-title card-text p-4 mb-2 bg-danger text-white'  >album:- {data.id}</h5></center>
                <div>
                <center> <h5> Album Title</h5>
                   <p>
                    {data.title}
                    </p> 
                    <button className="btn btn-primary" onClick={(e)=>{editHandler(data.id)}} style={{marginRight:'10px' }}>Edit</button>
                  <button className="btn btn-primary" onClick={(e)=>{deleteHandler(data.id)}}>Delete</button>
                    </center>
                </div>
              </div>
            </div>
          ))}
        </div>
      
    </div>   
           
    </div>
  )
}

export default Album