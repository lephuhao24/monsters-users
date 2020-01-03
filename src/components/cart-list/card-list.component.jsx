import React from 'react'
import './card-list.component.scss'
import {Card} from '../card/card.component.jsx'
export const CardList = (props) => {
    return (
        <div className='card-list'>
            {props.users.map((user) => {
                return (
                    <Card key={user.id} user={user}/>
                )
            })}
        </div>
    )
}
