import React from 'react'


export default function Card ({pokemon}) {
    return (
     
        <div className="card">
            <div className="photo">
            <img
                src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png"
                alt={`${pokemon.name} photo`}
            />
            </div>
            <div className="info">
            <div className="id">N° 001</div>
            <div className="name">
                <a href={`/${pokemon.name}`}>
                    {`${pokemon.name}`}
                </a>
            </div>
            <div className="types">
                <div className="grass">Grass</div>
                <div className="poison">Poison</div>
            </div>
            </div>
        </div>
    );
}