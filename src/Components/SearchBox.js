import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa3 mb2'>
            <input 
            className='pa3 ba bw1 b--blue'
            type='search'
            placeholder='Search Pokemon' 
            onChange={ searchChange }
            />
        </div>
    )
}

export default SearchBox;