import React from 'react';

export default function Citizen(props){
    console.log('receiving props:' ,props)
    return <div>
        <h1>{props.citizen.id}/25</h1>
        <h1>{props.citizen.name.first} {props.citizen.name.last}</h1>
        <span>
            <h3>From: </h3>
            <span>{props.citizen.city}, {props.citizen.country}</span>
            </span>
        <p></p>
        <span>Title: {props.citizen.title}</span>
        <p></p>
        <span>Employer: {props.citizen.employer}</span>
        <p></p>
        <h3>Favorite Movies:</h3>
        <p>1. {props.citizen.favoriteMovies[0]}</p>
        <p>2. {props.citizen.favoriteMovies[1]}</p>
        <p>3. {props.citizen.favoriteMovies[2]}</p>
    </div>
}