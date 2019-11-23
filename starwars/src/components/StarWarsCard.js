import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsStuff from "./StarWarsStuff";

function StarWarsCard () {
    const [cards, setCard] = useState([]);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/${counter}`)
        .then(response => {
            setCard([...cards, response.data]);
            console.log(response);
            setCounter(counter + 1);
        })
        .catch(error => {
            console.log("Error: ", error);
        })
    }, [counter]);
    return (
        <div className="container">
            <div className="container-child">
                {cards.map(card => {
                    return (
                        <StarWarsStuff
                            name={card.name}
                            height={card.height}
                            mass={card.mass}
                            hairColor={card.hair_color}
                            gender={card.gender}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default StarWarsCard;