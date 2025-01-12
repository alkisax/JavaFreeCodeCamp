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

const fetchPokemon = async (nameOrID) => {
  try {
    const res = await fetch(`${url}/${nameOrID}`);
    return await res.json();
  } catch (err) {
    alert("Pokémon not found");
    console.error(`There was an error `, err);
  }
}

const displayPokemon = async (nameOrID) => {
  try {
    const pokemonDetails = await fetchPokemon(nameOrID);

    namePokemon.innerText = `Name: ${pokemonDetails.name}`;
    idPokemon.innerText = `ID: ${pokemonDetails.id}`;
    weight.innerText =`Weight: ${pokemonDetails.weight}`;
    height.innerText = `Height: ${pokemonDetails.height}`;


    // types.innerText = `Types: ${pokemonDetails.types
    //   .map((typeInfo) => typeInfo.type.name)
    //   .join(", ")}`;
    hp.innerText = `HP: ${pokemonDetails.stats[0].base_stat}`;
    attack.innerText = `Attack: ${pokemonDetails.stats[1].base_stat}`;
    defence.innerText = `Defense: ${pokemonDetails.stats[2].base_stat}`;
    specialAttack.innerText = `Special Attack: ${pokemonDetails.stats[3].base_stat}`;
    specialDefense.innerText = `Special Defense: ${pokemonDetails.stats[4].base_stat}`;
    speed.innerText = `Speed: ${pokemonDetails.stats[5].base_stat}`;
  } catch (err) {
    console.error("Error displaying Pokémon:", err);
    alert("Error displaying Pokémon");
  }
};

const resetDisplay = () => {};

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase().trim(); 
  
  fetchPokemons().then(() => {
    const foundPokemon = pokemonDataArr.find(
      (pokemon) => pokemon.name.toLowerCase() === searchTerm
    );
    if (!foundPokemon) {
      alert("Pokémon not found"); 
    } else {
      displayPokemon(searchTerm);
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

// const displayPokemons = (pokemons) => {
//   let pokemonContent = '';
//   pokemons.forEach(({ id, name, url }) => {
//     pokemonContent += `
//       <div>
//         <h3>Name: ${name}</h3>
//         <h3>ID: ${id}</h3>
//       </div>
//     `;
//   });
//   infoContainer.innerHTML += pokemonContent;
// };


  // const pokemonContent = `
  //   <div>
  //     <h3>Name: ${pokemon.name}</h3>
  //     <h3>ID: ${pokemon.id}</h3>
  //   </div>
  // `;
  // infoContainer.innerHTML = pokemonContent;