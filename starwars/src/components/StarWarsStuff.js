import React from "react";

const StarWarsStuff = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Height: {props.height}</h2>
            <h2>Mass: {props.mass}</h2>
            <p>Hair color: {props.hairColor}</p>
            <p>Gender: {props.gender}</p>
        </div>
    )
};
export default StarWarsStuff;