import React, { useState } from 'react';
import './css/TinderCards.css';
import TinderCard from 'react-tinder-card';

const TinderCards = () => {
    // storing all people's data in an array
    const [people, setPeople] = useState([
        {
            name: 'Adesanya',
            url: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Israel_Adesanya_2014.jpg"
        },
        {
            name: 'Rashmika Mandhana',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/RashmikaMandanna_at_Bheeshma_event.jpg/220px-RashmikaMandanna_at_Bheeshma_event.jpg'
        },
        {
            name: 'Khabib Nurmagomedov',
            url: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Khabib_nurmagomedov_abdulmanapovich.jpg'
        },
        {
            name: 'Conor Mcgregor',
            url: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Conor_McGregor.jpg'
        },
        {
            name: 'Deepika Padukone',
            url: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Deepika_Padukone_Cannes_2018_%28cropped%29.jpg'
        },
        {
            name: 'Pooja Hegde',
            url: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Pooja_Hegde_at_the_Bombay_Times_Fashion_Week.jpg'
        }
    ])

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
                            style={{ backgroundImage: `url(${person.url})` }}
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
