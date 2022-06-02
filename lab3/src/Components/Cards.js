import React from 'react'
import CardItem from './CardItem'
import Blogs from '../db.json'
import './Cards.css'

function Cards() {
  return (
    <>
    <div className='cards'>
    <h1>Check out the trending blogs !</h1>
    
    {
      Blogs && Blogs.map(blog => {
          return(
            <div className='cards__container'>
              <div className='cards__wrapper'>
                  <ul className='cards__item'>
                      <CardItem 
                      src='/images/img-1.jpg'
                      key={blog.id}
                      title={blog.title}
                      />
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