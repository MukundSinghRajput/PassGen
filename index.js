import { Pokedex } from "pokedex-api"

const pokedex = new Pokedex()

// console.log(pokedex.getPokemon("mew"));

const prom = new Promise((resolve, reject) => {
    resolve(pokedex.getPokemon(1))
    // resolve(pokedex.listPokemon())
})

prom.then((v) => {
    console.log(v);
})