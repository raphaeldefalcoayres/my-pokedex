export interface Pokemon {
  id: string
  name: string
  img: string
  weight: number
  height: number
  base_experience: number
  color: string
  evolves_from_species: boolean
  types: string
  species: Species
  habitat: string
  evolution: Evolution[]
  stats: Stat[]
}

export interface Species {
  name: string
  url: string
}

export interface Evolution {
  id: number
  name: string
  img: string
  minLevel?: number
}

export interface Stat {
  base_stat: number
  effort: number
  stat: Stat2
}

export interface Stat2 {
  name: string
  url: string
}
