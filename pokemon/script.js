const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

const namePokemon = document.getElementById("pokemon-name");
const idPokemon = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defence = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");  

const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const infoContainer = document.getElementById("info-container");

let pokemonDataArr = [];


const fetchPokemons = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    pokemonDataArr = data.results;
  } catch (err) {
    alert("Pokémon not found");
    console.error(`There was an error `, err);
  }
};

const displayPokemons = (pokemons) => {
  let pokemonContent = '';
  pokemons.forEach(({ id, name, url }) => {
    pokemonContent += `
      <div>
        <h3>Name: ${name}</h3>
        <h3>ID: ${id}</h3>
      </div>
    `;
  });
  infoContainer.innerHTML += pokemonContent;
};

const displayPokemon = (pokemon) => {
  infoContainer.innerHTML = '';
  const pokemonContent = `
    <div>
      <h3>Name: ${pokemon.name}</h3>
      <h3>ID: ${pokemon.id}</h3>
    </div>
  `;
  infoContainer.innerHTML = pokemonContent;
};

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase(); 

  
  fetchPokemons().then(() => {
    const foundPokemon = pokemonDataArr.find(
      (pokemon) => pokemon.name.toLowerCase() === searchTerm
    );
    if (!foundPokemon) {
      alert("Pokémon not found"); 
    } else {
      displayPokemon(foundPokemon);
    }
  });
});



// this was automated changed by vscode
// const fetchPokemons = () => {
//   return fetch(url) 
//   .then((res) => res.json())
//   .then((data) => {
//     pokemonDataArr = data.results;
//   })

//   .catch((err) => {
//     alert("Pokémon not found")
//     console.error(`There was an error `, err);
//   })
// };