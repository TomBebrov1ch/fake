import React from 'react'
import '../Styles/style.scss'

const Card = (props) => {
  return (
    <div className='card'>
        <p>{props.id}</p>
        <img className='card__image' src={props.image} alt="card photo" />
        <h1>{props.title}</h1>
        <p1>{props.price + ' $'}</p1>
    </div>
  )
}

export default Card