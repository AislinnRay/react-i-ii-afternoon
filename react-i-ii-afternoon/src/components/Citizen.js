import React from 'react';

export default function Citizen(props){
    console.log('receiving props:' ,props)
    return <div>
        <p className="ID"><strong>{props.citizen.id}/25</strong></p>
        <h1 className="Name">{props.citizen.name.first} {props.citizen.name.last}</h1>
        <p className="From"><strong>From: </strong>{props.citizen.city}, {props.citizen.country}</p>
        <p className="Role"><strong>Job Title: </strong>{props.citizen.title}</p>
        <p className="Employer"><strong>Employer: </strong>{props.citizen.employer}</p>
        <p className="Movies">
            <strong>Favorite Movies:</strong>
            <p>1. {props.citizen.favoriteMovies[0]}</p>
            <p>2. {props.citizen.favoriteMovies[1]}</p>
            <p>3. {props.citizen.favoriteMovies[2]}</p>
        </p>
    </div>
}