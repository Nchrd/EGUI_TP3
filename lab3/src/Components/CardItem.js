import React, { useEffect, useState } from 'react'

function CardItem(props) {

  const url ="http://localhost:5000/users";
  const [users, setUsers] = useState([]);
  
  const fetchUsers = async () => {
    try{
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
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
          <li className='cards__item'>
              <figure className='cards__tiem__pic-wrap'>
                    <img src={props.src} alt='Blog' className='cards__item_img'></img>    
              </figure>
              <ul className='cards__item_link'>
              <div className='cards__item__info'>
                  {
                    users.map(user => {
                      if(user.id === props.ownerId){
                        return(
                          <h5 className='cards__item__text'>
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