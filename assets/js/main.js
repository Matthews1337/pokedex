

const pokemonList = document.getElementById("pokemonList");
//pokemonList.innerHTML += '<li>Teste</li>' /*adiciona mais um elemento <li> */

const loadMoreButton = document.getElementById("loadMoreButton");

const limit = 10;
let offset = 0;

const maxRecords = 151;

function LoadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map(
        (pokemon) => `
            <li class="pokemon">
                   <div class="card ${pokemon.type}">     
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
        
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types
                          .map(
                            (type) => `<li class="type ${type}">${type}</li>`
                          )
                          .join("")}
                    </ol>
                    <img class="front-img" src="${pokemon.photo}" 
                        alt="${pokemon.name}">
                    <img src="/img/pokebola2.png" 
                        alt="pokebola">
                </div>
                <div class="stats">
                <ol class="card-detail-list">
                <hr>
                <li class="stat-item">
                    <span class="stat-item-text">HP    </span>
                    <div class="ability-container">
                        <div class="hp" id="hp"></div>
                    </div>
                    <span class="stat-item-value">${pokemon.hp}</span>
                </li>
                <li class="stat-item">
                    <span class="stat-item-text">ATK   </span>
                    <div class="ability-container">
                        <div class="hp" id="atk"></div>
                    </div>
                    <span class="stat-item-value">${pokemon.attack}</span>
                </li>
                <li class="stat-item">
                    <span class="stat-item-text">DEF   </span>
                    <div class="ability-container">
                        <div class="hp" id="def"></div>
                    </div>
                    <span class="stat-item-value">${pokemon.defense}</span>
                </li>
                <li class="stat-item">
                    <span class="stat-item-text">SP. ATK</span>
                    <div class="ability-container">
                        <div class="hp" id="sp_atk"></div>
                    </div>
                    <span class="stat-item-value">${
                      pokemon.specialAttack
                    }</span>
                </li>
                <li class="stat-item">
                    <span class="stat-item-text">SP. DEF</span>
                    <div class="ability-container">
                        <div class="hp" id="sp_def"></div>
                    </div>
                    <span class="stat-item-value">${
                      pokemon.specialDefense
                    }</span>
                </li>
                <li class="stat-item">
                    <span class="stat-item-text">SPEED </span>
                    <div class="ability-container">
                        <div class="hp" id="speed"></div>
                    </div>
                    <span class="stat-item-value">${pokemon.speed}</span>
                </li>
            </ol>
                </div> 
                </div>      
            </li>
            


            `
      )
      .join("");
    pokemonList.innerHTML += newHtml;
  });
}

LoadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;

  const qtdRecordNextPage = offset + limit;

  if (qtdRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    LoadPokemonItens(offset, newLimit);
    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    LoadPokemonItens(offset, limit);
  }
});

/*for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        listItems.push(convertPokemonToLi(pokemon))
    }
    console.log(listItems)*/

/*
without stats
<li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
        
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
        
                    <img src="${pokemon.photo}" 
                        alt="${pokemon.name}">
                </div>  
            </li> */
