import React from 'react';

export default function Citizen(props){
    console.log('receiving props:' ,props)
    return <div>
        <h1 className="ID">{props.citizen.id}/25</h1>
        <h1 className="Name">{props.citizen.name.first} {props.citizen.name.last}</h1>
        <span className="From">
            <h3>From:  </h3>
            <span>{props.citizen.city}, {props.citizen.country}</span>
        </span>
        <p className="Role"> 
            <h3>Job Title:</h3>
            <span>{props.citizen.title}</span>
        </p>

        <div className="Employer">
            <h3>Employer:  </h3><span>{props.citizen.employer}</span>
        </div>

        <p className="Movies">
            <h3>Favorite Movies:</h3>
            <p>1. {props.citizen.favoriteMovies[0]}</p>
            <p>2. {props.citizen.favoriteMovies[1]}</p>
            <p>3. {props.citizen.favoriteMovies[2]}</p>
        </p>

    </div>
}