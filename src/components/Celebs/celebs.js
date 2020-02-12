import React from 'react';

const Celebs = ({ celebs }) => {
    console.log('Celebs ' + JSON.stringify(celebs, null, 2))
    return(
        <div className='absolute'>
            {celebs.map(celeb => (
                <div key={celeb.probability}>
                    <h4>{celeb.name}</h4>
                    <h6>{`${(celeb.probability * 100).toFixed(2)}%`}</h6>
                </div>
            ))}
            </div>
    )
};

export default Celebs;