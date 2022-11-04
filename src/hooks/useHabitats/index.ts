import { useQuery } from '@tanstack/react-query'

const fetchHabitats = async () => fetch('https://api-pokemons.herokuapp.com/habitats').then((res) => res.json())

const useHabitats = () => useQuery(['habitats'], () => fetchHabitats())

export { useHabitats, fetchHabitats }
