

function convertPokemonToLi(pokemon){           //converte os parametros para a forma que está a <li> 
    return`
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
        </li>
    `
}

//console.log(document.getElementById('pokemonList')) // busca o elemento com o id de pokemonList no html

const pokemonList = document.getElementById('pokemonList')
//pokemonList.innerHTML += '<li>Teste</li>' /*adiciona mais um elemento <li> */


pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml =pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml


   /*for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        listItems.push(convertPokemonToLi(pokemon))
    }
    console.log(listItems)*/
})
    
