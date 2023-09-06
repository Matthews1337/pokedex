function pokemonStats(poke){
    const hp = document.getElementById("hp")
    const hp_width = poke.hp
    hp.style.width = `${hp_width}%`


    const atk = document.getElementById("attack")
    const atk_width = poke.attack
    atk.style.width = `${atk_width}%`

    const def = document.getElementById("defense")
    const def_width = poke.defense
    def.style.width = `${def_width}%`


    const sp_atk = document.getElementById("special-attack")
    const sp_atk_width = poke.specialAttack
    sp_atk.style.width = `${sp_atk_width}%`

    const sp_def = document.getElementById("special-defense")
    const sp_def_width = poke.specialDefense
    sp_def.style.width = `${sp_def_width}%`

    const speed = document.getElementById("speed")
    const speed_width = poke.speed
    speed.style.width = `${speed_width}%`

}
export{pokemonStats};