import ReactPaginate from 'react-paginate';
import './Card.css';
import React,{useState, useEffect} from "react";
//import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
//import Editpost from './Editpost';
import { useNavigate } from 'react-router-dom';
const PER_PAGE=2;
 function Post() {
  var index=localStorage.getItem("index");
  const [post, setPost]= useState([]);
  const navigate=useNavigate();
 
  //var editTitle=localStorage.getItem("title");
  //var editBody=localStorage.getItem("body");
  
  useEffect(()=>{document.getElementById('navbar').style.display='box'},[])
 
useEffect(()=>{
 setPost( JSON.parse(localStorage.getItem("userpost")))
  
},[])
const [currentPage, setCurrentPage] = useState(0);
  const editHandler=(postid,posttitle,postbody)=>{
    localStorage.setItem("postid",postid);
    localStorage.setItem("posttitle",posttitle);
    localStorage.setItem("postbody",postbody);
    navigate('/updatepost');
  }
  const addpostHandler=()=>{
          navigate("/addpost") 
        }
  const deleteHandler=(e,postid)=>{
    const delpost=post.filter((item)=>item.id!==postid);
    setPost(delpost);
    localStorage.setItem("userpost",JSON.stringify(post));
  }
  
  function handlePageClick({selected: selectedPage}){
     setCurrentPage(selectedPage);
  }
     const offset=currentPage * PER_PAGE;
     const currentpagedata= post.slice(offset, offset +PER_PAGE)
     .map((res,index)=> 
      <div key={res.id}>  
        <div className=" col-md-12 animated fadeIn " style={{padding:'20px'}} >
          <div className="card text-white" style={{background:'#2b10c4'}}  >
                <div className="card-title">
                <center><h6 className="bg-success">Post no.:- {res.id}</h6></center>
                </div>
                <div className="card-body">              
                <h6>Title:- {res.title}</h6>
                <h6 >Body:- {res.body}</h6>
                {localStorage.setItem("userId",res.userId)}
                <div style={{display:'flex',alignItems:'center' ,justifyContent:'center'}}>
                <button className="btn btn-primary" onClick={(e)=>{editHandler(res.id,res.title,res.body)}} style={{marginRight:'10px' }}>Edit</button>
                  <button className="btn btn-primary" onClick={(e)=>{deleteHandler(e,res.id)}}>Delete</button>
                </div>
            </div>
          </div>
        </div>
    </div>
  ) 
  const pageCount= Math.ceil(post.length/ PER_PAGE);
  return(
    <div >
     
<div className="row ">
      <center><button className="btn btn-primary" style={{marginTop:'30px'}} onClick={addpostHandler}>Add New</button></center>
      {currentpagedata}
      </div>
      <ReactPaginate
         breakLabel="..."
         previousLabel={'< Previous'}
          nextLabel={'Next>'}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination_link"}
          nextLinkClassName={"pagination_link"}
          disabledClassName={"pagination_link_disabled"}
          activeClassName={"pagination_link_active"}
          pageRangeDisplayed={5}
          pageClassName={"page"}
          renderOnZeroPageCount={null}
          />
    </div>
  )
}
export default Post