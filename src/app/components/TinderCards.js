import React, { useState, useEffect } from 'react';
import './css/TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from '../axios';

const TinderCards = () => {
    // storing all people's data in an array
    const [people, setPeople] = useState([]);

    const fetchallcards = async () => {
        const req = await axios.get("/cards/getallcards");
        console.log(req);
        setPeople(req.data);
    }

    useEffect(() => {
        fetchallcards();
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log('You swiped: ' + direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen')
    }

    return (
        <div className='tc-outer'>

            <div className='tc-container'>
                {/* iterating through all the dates */}
                {people.map((person) => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        // defining custom methods for following stock methods
                        onSwipe={(direction) => swiped(direction, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            className='card'
                            style={{ backgroundImage: `url(${person.imageUrl})` }}
                        >
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}

            </div>

        </div>
    )
}

export default TinderCards;
