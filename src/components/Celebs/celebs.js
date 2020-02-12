import React from 'react';
import './Celebs.css';

const Celebs = ({ celebs }) => {
    return(
        <div className='celebs'>
            {celebs.map(celeb => (
                <div key={celeb.probability}>
                    <h2>{celeb.name} - {`${(celeb.probability * 100).toFixed(2)}%`}</h2>
                </div>
            ))}
            </div>
    )
};

export default Celebs;