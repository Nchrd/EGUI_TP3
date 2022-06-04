import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';


function BlogDetails(props) {
  const { id } = useParams();

  const url = `http://localhost:5000/blogs/${id}`;
  const [loading, setLoading] = useState(false);
  const [blog, setblog] = useState([]);

  const fetchblog = async () => {
    setLoading(true);
    try{
      const response = await fetch(url);
      const blog = await response.json();
      setLoading(false);
      setblog(blog);
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
          <h2>No entries created yet !</h2>
        </div>
      </main>
    )
  }

  let tb_data = blog.entrylist.map((item) => {
    return(
      <tr key={item.id}>
        <td>{item.title}</td>
        <td>{item.content}</td>
        <td>{item.date}</td>
        <td>{item.userId}</td>
        <td>
          <Link to='/posts/delete'>
            <btn className='btn btn-danger'>Delete</btn>
          </Link>
          <Link to='/posts/edit'>
          <btn className='btn btn-primary'>Edit</btn>
          </Link>
        </td>
      </tr>
    )
  })

  return (
    <>
    <h1>{}</h1>
    
    <div className='cards'>
    <h1>Check out the entries !</h1>
      <table className="table table-bordered table-hover">
        <thead className='table__header'>
          <tr className='header__label'>
            <th>
              Title
            </th>
            <th>
              Content
            </th>
            <th>
              Date
            </th>
            <th>
              Author (ID)
            </th>
            <th>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {tb_data}
        </tbody>
      </table>
          
    </div>
    
    <Link to='/posts/create'>
      <btn>New entry</btn>
    </Link>
    
    </> 
  )
}


export default BlogDetails;