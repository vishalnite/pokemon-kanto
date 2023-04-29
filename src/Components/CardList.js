import React from 'react';
import Card from '../Components/Card';

const CardList = ({ pokeData }) => {
    return(
        <div>
            {
                pokeData.map((pokemon) => {
                    return(
                        <Card
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.front_default}
                        type={pokemon.types[0].type.name}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;