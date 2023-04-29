import React, { Component } from 'react';
import CardList from '../Components/CardList';
import logo from './pokemon-logo-size.png';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            pokeData : [],
            searchField: ""
        }
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response => response.json())
            .then(allPokemon => {
                const promises = allPokemon.results.map(pokemon =>
                    fetch(pokemon.url)
                    .then(resp => resp.json())
                );

                Promise.all(promises).then(pokemonData =>
                    this.setState({ pokeData: pokemonData })
                );
            });
    }

    onSearchChange = (event) => {
        this.setState({ searchField : event.target.value });
    }
    
    render() {
        const {pokeData, searchField} = this.state;

        const filteredPokemon = pokeData.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
        })

        if(!pokeData.length) {
            return <h1 className='tc'>LOADING...</h1>
        }
        else {
            return (
                <div className='tc'>
                    <div className='mt3'>
                        <img src={logo} alt='pokemon-logo' width='300' />
                    </div>
                    <SearchBox searchChange={ this.onSearchChange }/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList pokeData={ filteredPokemon } />
                        </ErrorBoundry>
                        
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;