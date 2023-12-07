import listadoPokemon from "../../mocks/pokemonList.json";
import Card from "../Card/Card"

const Contenido = () => {
    const cardList = (
        listadoPokemon.results.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
        ))
      );
  return (
    <div>
          <div class="header">
        <div class="title">Pokedex</div>
        <div class="search">
          <input type="text" class="searchbox" />
        </div>
      </div>
    <div className="contenido">
       
      {cardList}
    </div>
    </div>
  );
};

export default Contenido;