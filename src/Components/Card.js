import React from 'react';

const Card = ({ id, name, image, type}) => {
    return(
        <div className='dib b ba b--gray br2 tc pa4 ma3 bw1 bg-white shadow-5 grow'>
            <img src={image} alt='pokemon' width='150' />
            <hr />
            <p className='f4'><span>#{id}</span> {name}</p>
            <p>Type: {type}</p>
        </div>
    )
}

export default Card;