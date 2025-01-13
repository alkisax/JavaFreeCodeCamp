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
    nameOrID = !isNaN(nameOrID) ? Number(nameOrID) : nameOrID ;
    console.log("Search Term:", nameOrID);
    const res = await fetch(`${url}/${nameOrID}`);
    return await res.json();
  } catch (err) {
    alert("Pokémon not found");
    console.error(`There was an error `, err);
  }
}

const displayPokemon = async (nameOrID) => {
  try {
    resetDisplay();
    
    const pokemonDetails = await fetchPokemon(nameOrID);

    const spriteImg = document.createElement("img");
    spriteImg.src = `${pokemonDetails.sprites.front_default}`;
    spriteImg.id = "sprite";

    infoContainer.appendChild(spriteImg);

    console.log("Sprite URL:", pokemonDetails.sprites.front_default);
    console.log("Appending sprite image:", spriteImg);

    namePokemon.innerText = `${pokemonDetails.name.toUpperCase()}`;
    idPokemon.innerText = `${pokemonDetails.id}`;
    weight.innerText =`${pokemonDetails.weight}`;
    height.innerText = `${pokemonDetails.height}`;

    types.innerHTML = "";
    pokemonDetails.types.forEach(typeInfo => {
      const typeElement = document.createElement("span")
      typeElement.innerText = `${typeInfo.type.name.toUpperCase()} `
    types.appendChild(typeElement)
    });

    // const typeElement = document.createElement("span");
    // typeElement.innerText = pokemonDetails.types[0].type.name.toUpperCase();
    // types.appendChild(typeElement)

    hp.innerText = `${pokemonDetails.stats[0].base_stat}`;
    attack.innerText = `${pokemonDetails.stats[1].base_stat}`;
    defence.innerText = `${pokemonDetails.stats[2].base_stat}`;
    specialAttack.innerText = `${pokemonDetails.stats[3].base_stat}`;
    specialDefense.innerText = `${pokemonDetails.stats[4].base_stat}`;
    speed.innerText = `${pokemonDetails.stats[5].base_stat}`;
  } catch (err) {
    console.error("Error displaying Pokémon:", err);
    alert("Error displaying Pokémon");
  }
};

const resetDisplay = () => {
  namePokemon.innerText = '';
  idPokemon.innerText = '';
  weight.innerText = '';
  height.innerText = '';
  types.innerText = '';
  hp.innerText = '';
  attack.innerText = '';
  defence.innerText = '';
  specialAttack.innerText = '';
  specialDefense.innerText = '';
  speed.innerText = '';

  const existingSprite = document.getElementById("sprite");
  if (existingSprite) {
    existingSprite.remove();
  }
};

searchButton.addEventListener("click", () => {

  let searchTerm = searchInput.value.trim(); 

  if (isNaN(searchTerm)) {
    searchTerm = searchTerm.toLowerCase();
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
  } else {
    fetchPokemon(searchTerm).then(pokemon => {
      if (!pokemon) {
        alert("Pokémon not found");
      } else {
        displayPokemon(searchTerm);
      }
    });
  }
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

  
  // types.innerText = `${pokemonDetails.types[0].type.name.toUpperCase()}`;

  // types.innerText = `${pokemonDetails.types
  //   .map((typeInfo) => typeInfo.type.name)
  //   .join(", ")}`;