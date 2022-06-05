import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CardItem(props) {

  const [users, setUsers] = useState([]);
  
  const fetchUsers = async () => {
    try{
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response);
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if(users.length === 0) {
    return(
      <main>
        <div className='title'>
          <h2>Fatal Error : no user</h2>
        </div>
      </main>
    )
  }

  return (
      <>
        <li className='card' style={{width: "18rem"}}>
          <figure>
            <img src={props.src} alt='Blog' className='card-img-top'></img>    
          </figure>
          <ul className='cards__item__link'>
            <div className='card-body'>
                {
                  users.map(user => {
                    if(user.id === props.ownerId){
                      return(
                        <h5 className='card-title'>
                          {props.title} by {user.username} 
                        </h5>
                      )
                    }
                  })
                }
              </div>  
            </ul>   
        </li>
    </>
  );
}

export default CardItem