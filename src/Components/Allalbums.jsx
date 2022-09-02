import React ,{useState,useEffect} from 'react';
//import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './Card.css';
const PER_PAGE=6;
function Allalbum() {
  const navigate= useNavigate();
  const [data, setData] = useState([]);
  const URL = 'https://jsonplaceholder.typicode.com/albums';
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');
  useEffect(() => {
      fetchData()
      document.getElementById('home').style.display='none';
  }, [])


  const fetchData = () => {
      fetch(URL)
          .then((res) =>
              res.json())

          .then((data) => {
             // console.log(response);
              setData(data);
          },)

  }
    const commentClick=(e)=>{
        //console.log(index);
        navigate(`/comments`);
    }
    function handlePageClick({selected: selectedPage}){
     // console.log("selected page:",selectedPage);
      setCurrentPage(selectedPage);
  }
  const offset=currentPage * PER_PAGE;
  const currentpagedata= data.slice(offset, offset +PER_PAGE)
  .filter(res=>res.title.toLowerCase().includes(search))
  .map((res,index)=>  <div className="col-md-4 animated fadeIn " key={res.id} style={{padding:"10px"}}>
  <div className="card" style={{background:'#CCF381', color:'#4831D4'}}>
    <center><h5 className='card-title card-text p-4 mb-2 bg-danger text-white'  >album:- {res.id}</h5></center>
    <div>
    <center> <h5> Album Title</h5>
       <p>
        {res.title}
        </p> 
        </center>
    </div>
  </div>
</div>
  )
 // console.log("currentpagedata :",currentpagedata)
  const pageCount= Math.ceil(data.length/ PER_PAGE);
    const showData=()=>
    {
      return(
        <div className="App">
       
        <div className="clearfix">
          <div className='container-fluid'>
          <center>
            <span style={{color:'violet',fontSize:'40px'}}>Albums</span>
          </center>
          <input style={{marginLeft:'10px',}} type="text" name="search" id="search" onChange={(e)=>{setSearch(e.target.value)}} 
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

export default Allalbum;