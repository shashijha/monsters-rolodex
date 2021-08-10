import React from 'react';
import './card.styles.css';

export const Card = ( props ) => (
    <div className="card-container">
        <img alt="monoster" src={`https://robohash.org/${props.monoster.id}?set=set2`} />
        <h1>{props.monoster.name}</h1>
        <h2>{props.monoster.email}</h2>
        <p></p>
    </div>
)