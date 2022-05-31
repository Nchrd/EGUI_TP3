import React from 'react'
import {Link} from "react-router-dom";

function CardItem(props) {
  return (
    <>
    <li className='cards__item'>
           <Link className='cards__item__link' to='/blog'>
                <figure className='cards__tiem__pic-wrap'>
                    <img src={props.src} alt='Blog' className='cards__item_img'></img>    
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>
                      {props.title}
                      </h5>
                </div>   
            </Link>     
        </li>
    </>
  );
}

export default CardItem