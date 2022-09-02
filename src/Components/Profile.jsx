import React,{useState, useEffect} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate} from "react-router-dom";
//import User from "./Users";
import Post from "./Post";
import pfp from '../../src/Components/pfp.jpeg';

 function Profile(){
  
  useEffect(()=>{document.getElementById('navbar').style.display='box'},[])
    const [user,setUser]= useState([]);
    const [photo,setPhoto]=useState([]);
    const [post, setPost]= useState([]);
    //document.documentElement.style.overflow='auto';
    const navigate = useNavigate();
    var index=localStorage.getItem("index");
    // fetching /photos data here
  
    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/albums/?userId=${index}`)
      .then(res=>{
          localStorage.setItem("useralbum",JSON.stringify(res.data));
      })
      .catch(err=>{
          console.log(err);
      })
},[])
    const fetchPhoto=()=>{
      useEffect(() => {
        document.getElementById('home').style.display='none';
        axios
          .get(`https://jsonplaceholder.typicode.com/photos/${index}`)
          .then(res => {
            setPhoto(res.data);
          })
          .catch(err => {
            console.log(err)
          })
      },[])  
    }
    // fetching /posts data here
    const fetchPost=()=>{
      useEffect(() => {
        axios
          .get(`https://jsonplaceholder.typicode.com/posts?userId=${index}`)
          .then(res => {
  
            setPost(res.data);
          })
          .catch(err => {
            console.log(err)
          })
      },[])  
    }
    const albumHandler=()=>{
      navigate('/profile/album')
    }
    // fetching /users data here
    useEffect(() => {
      
      axios
        .get(`https://jsonplaceholder.typicode.com/users?id=${index}`)
        .then(res => {
          setUser(res.data);
        })
        .catch(err => {
          console.log(err)
        })
    },[])

    return(
        fetchPhoto(),fetchPost(),
        <>
       <div className="App container-fluid">
          <div className="row">
          <div className="col-9">
            <Post/>
          </div> 
        <div className="col-3 animated fadeIn " >
        
              <div className="card" >
                <center>
                {user&&user.map(data=>( <h5 key={data.id} className='card-title card-text p-4 mb-2 bg-secondary text-white'> {data.name}</h5>))}</center> 
                
                <div className="card-body">
                  <div className="avatar">
                  <img
                      src={pfp}
                      className="card-img-top"
                      alt=""
                    />
                  </div>

                  <div>
                  
                  {
                    
                        user&&user.map(item=>(
                          <div key={item.id}>
                  <p className="card-text p-3 mb-2  text-white" style={{background:'#0c38eb'}} >
                  <h6>Username:- {item.username}</h6>
                    <h6>Email:- {item.email}</h6>
                    <h6>Address: <br />
                  
                          <span key={item.id}>
                            {item.address.street},{item.address.suite},{item.address.city},{item.address.zipcode}
                          </span>
                    </h6>
                    </p>
                    <div>
                      <center>
                        <button className=" btn btn-primary" onClick={albumHandler}>View Albums</button>
                      </center>
                    </div>
                    </div>
                     ))}
                </div>
                
              </div>
            </div>
          
          
            </div>
            
            </div>
            
       </div>
  
                  
  </>
    
    )
 }
 export default Profile;