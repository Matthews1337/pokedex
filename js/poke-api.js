

const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.name = pokeDetail.name
    pokemon.number = pokeDetail.id
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    
    pokemon.types = types
    pokemon.type = type

    const stats = pokeDetail.stats.map((statsBase) => statsBase.base_stat)
    const [stat] = stats
    pokemon.hp = stats[0]
    pokemon.attack = stats[1]
    pokemon.defense = stats[2]
    pokemon.specialAttack = stats[3]
    pokemon.specialDefense = stats[4]
    pokemon.speed = stats[5]
    
    return pokemon
}

pokeApi.getPokemonDetail =(pokemon) =>{
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) =>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)
        
}




