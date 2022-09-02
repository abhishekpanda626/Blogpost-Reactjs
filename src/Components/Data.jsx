import React ,{useState,useEffect} from 'react';
//import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './Card.css';
import pfpdata from '../../src/Components/data.png';
//import { BorderStyle } from 'react-bootstrap-icons';
const PER_PAGE=20;
function Allpost() {

  const navigate= useNavigate();
  const [data, setData] = useState([]);
  //const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const URL = 'https:jsonplaceholder.typicode.com/photos';
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
      fetchData()
  }, [])
  const fetchData = () => {
    
      fetch(URL)
          .then((res) =>
              res.json())

          .then((data) => {
              //console.log(data);
              setData(data);
             // setPosts(data)
          },)

  }
    const commentClick=(e)=>{
        navigate(`/comments`);
    }
    function handlePageClick({selected: selectedPage}){

      setCurrentPage(selectedPage);
  }
  const offset=currentPage * PER_PAGE;
  const currentpagedata= data.slice(offset, offset +PER_PAGE)

  .filter(res=>res.title.toLowerCase().includes(search))
  .map((res,index)=> <div style={{padding:'10px', BorderStyle:'groove' }} className="col-md-3 animated fadeIn " key={index}>
   
  <div className="card"  id="hideit">
      <center><h5 className='card-title card-text p-3 mb-2 bg-danger text-white'>Title:{res.title}</h5></center>
   
      <div className="avatar">
        <img
          src={pfpdata}
          className="card-img-top"
          alt=""
        />
         <div className="card-text p-3 mb-2 bg-success text-white"> 
      <center><h5>
      Id:{res.id}
      </h5></center>
      </div>
      </div>
    
    <div>
       <center><button onClick={e=>{commentClick(e)}} className="btn btn-primary btn-sm" >Comments</button></center> 
    </div>
  </div>
</div>
  )
  const pageCount= Math.ceil(data.length/ PER_PAGE);
  //search and filter done here
    const showData=()=>
    {

      return(
        <div className="App">
       
        <div className="clearfix">
          <div className='container-fluid' id='allblogs'>
            
            <h3  style={{color:'violet',font:'50px bolder ',marginLeft:'400px' }}>Blogs of all Users</h3>
            <input  type="text" name="search" id="search" onChange={(e)=>{setSearch(e.target.value)}} 
            placeholder='search by title' />

    
          <div className="row ">
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
          </div>
        </div>
      )
    }
    return (
      showData()
    )
}

export default Allpost;