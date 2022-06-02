import React, { useState } from 'react'
import {Link, BrowserRouter as Route, Routes, Router} from "react-router-dom";

function CardItem(props) {
  const id = props.id;
  const url = '/blog/' + props.id;
  return (
    <>
    <li className='cards__item' key={props.key}>
           <Link className='cards__item__link' to={`/blogs/${props.key}`}>
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