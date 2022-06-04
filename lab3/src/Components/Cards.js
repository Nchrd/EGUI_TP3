import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import './Cards.css'
import { Link } from 'react-router-dom'

function Cards() {

  const url = "http://localhost:5000/blogs";
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  
  const fetchBlogs = async () => {
    setLoading(true);
    try{
      const response = await fetch(url);
      const blogs = await response.json();
      setLoading(false);
      setBlogs(blogs);
    } catch(error) {
      setLoading(false);
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchBlogs();
  }, [])

  if(loading) {
    return(
      <div className='cards'>
        <h1>Check out the trending blogs !</h1>
        <h2>Loading...</h2>
      </div>
    )
  }

  if(blogs.length === 0) {
    return(
      <main>
        <div className='title'>
          <h2>No blog were created yet !</h2>
        </div>
      </main>
    )
  }
  return (
    <>
    <div className='cards'>
    <h1>Check out the trending blogs !</h1>

    {
      blogs.map(blog => {
          return(
            <div className='cards__container'>
              <div className='cards__wrapper'>
                  <ul className='cards__item'>
                  <Link to={`/blogs/${blog.id}`}>
                      <CardItem 
                      src='/images/img-1.jpg'
                      key={blog.id}
                      title={blog.title}
                      ownerId={blog.ownerId}
                      />
                      </Link>
                  </ul>
              </div>
          </div>
          )
        })  
    }

    </div>
    </>
  )
}

export default Cards