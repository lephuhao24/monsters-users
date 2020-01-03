import React from 'react';
import './card.component.scss'

export const Card = (props) => {
    return (
        <div className='card-item'>
            <img src={'https://robohash.org/'+props.user.id } alt={props.user.id}/>
            <h3> {props.user.name} </h3>
            <p> {props.user.email} </p>
        </div>
    )
}
