import { useQuery } from '@tanstack/react-query'

const fetchPokemons = async (query?: any) => {
  if (query) {
    return fetch(`https://api-pokemons.herokuapp.com/pokemons${query}`).then((res) => res.json())
  } else {
    return fetch('https://api-pokemons.herokuapp.com/pokemons').then((res) => res.json())
  }
}

const usePokemons = (query?: any) => {
  const qs = query ? '?' + new URLSearchParams(query).toString() : ':all'
  return useQuery([`pokemons${qs}`], () => fetchPokemons(qs))
}

export { usePokemons, fetchPokemons }
