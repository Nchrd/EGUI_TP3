import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import Session from 'react-session-api'


function BlogDetails() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [blog, setblog] = useState([]);

  const fetchblog = async () => {
    setLoading(true);
    try{
      Session.set("blogId", id);
      const response = await axios.get(`http://localhost:5000/entries?blogId=${id}`);
      setLoading(false);
      setblog(response.data);
    } catch(error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchblog();
  }, [])

  if(loading) {
    return(
      <div className='cards'>
        <h1>List of blog's entries !</h1>
        <h2>Loading...</h2>
      </div>
    )
  }

  if(blog.length === 0) {
    return(
      <main>
        <div className='title'>
          <h1>No entries created yet !</h1>
          <Link to='/posts/create' className='btn btn-primary'>
            New entry
          </Link>
        </div>
      </main>
    )
  }

  const areButtonsActive = (e1, e2) => {
    if(e1 === Session.get("username")) {
      Session.set("postId", e2);
      return(
        <>
          <button className='btn btn-danger' onClick={()=>deleteEntry(e2)}>
            Delete
          </button>
          <Link to='/posts/edit' className='btn btn-primary'>
            Edit
          </Link>
        </>
      )
    }else{
      return(
        <>
          <h6>No actions possible</h6>
        </>
      )
    }
  }

  const deleteEntry = async (e) => {
    alert(e);
    const response = await axios.delete(`http://localhost:5000/entries/${e}`);
    if(response){
      alert("Entry deleted");
    }else{
      alert("Oops... Somethng went wrong");
    }
  }

  return (
    <>
    <div className='cards'>
      <h1>Check out the entries !</h1>
      <table className="table table-bordered table-hover">
        <thead className='table__header'>
          <tr className='header__label'>
            <th>
              Title
            </th>
            <th style={{width: 700}}>
              Content
            </th>
            <th>
              Date
            </th>
            <th>
              Author
            </th>
            <th>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {
          blog.map(item => {
            return(
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td>{item.date}</td>
                <td>{item.owner}</td>
                <td>
                  {areButtonsActive(item.owner, item.id)}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    <Link to='/posts/create' className='btn btn-outline'>
      New entry
    </Link>
    </> 
  )
}

export default BlogDetails;