import Image from 'next/image'
import { FaLeaf, FaSkullCrossbones } from 'react-icons/fa'
import { Pokemon } from '../interfaces'

export default function Home() {
  const pokemon: Pokemon = {
    id: '001',
    name: 'bulbasaur',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    weight: 69,
    height: 7,
    base_experience: 64,
    color: 'green',
    evolves_from_species: false,
    types: 'poison,grass',
    species: {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
    },
    habitat: 'grassland',
    evolution: [
      {
        id: 1,
        name: 'bulbasaur',
        img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      },
      {
        id: 2,
        name: 'ivysaur',
        minLevel: 16,
        img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
      },
      {
        id: 3,
        name: 'venusaur',
        minLevel: 32,
        img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
      },
    ],
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
    ],
  }

  const pokemonHP: number =
    pokemon.stats.find((item) => item.stat.name === 'hp')?.base_stat || 0
  const pokemonSpeed: number =
    pokemon.stats.find((item) => item.stat.name === 'speed')?.base_stat || 0
  const pokemonAtack: number =
    pokemon.stats.find((item) => item.stat.name === 'attack')?.base_stat || 0
  const pokemonDefense: number =
    pokemon.stats.find((item) => item.stat.name === 'defense')?.base_stat || 0
  const pokemonTotal = pokemonHP + pokemonSpeed + pokemonAtack + pokemonDefense

  return (
    <>
      <header className="w-full flex items-center py-2 px-2 bg-primary_light">
        <Image
          src="/logo.svg"
          width={154}
          height={34}
          alt="logotipo escrito My Pokedex"
        />
      </header>
      <main className="flex flex-col md:flex-row gap-4 px-4">
        <div className="min-h-[400px] relative flex flex-col mt-10 p-4 rounded-3xl w-full bg-primary_light2 shadow-sm">
          <div className="flex w-full">
            <div className="-top-[20px] left-0 absolute text-white bg-green py-1 px-2 rounded-t-xl rounded-l-xl font-semibold">
              #{pokemon.id}
            </div>
            <div className="text-white text-2xl font-medium capitalize">
              {pokemon.name}
            </div>
            <div className="flex gap-2 mx-3">
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-purple text-purple_dark">
                <FaSkullCrossbones />
              </div>
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-green text-green_dark">
                <FaLeaf />
              </div>
            </div>
            <div className="absolute -top-10 right-0">
              <Image
                width={120}
                height={170}
                src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
                alt={`Imagem do pokemon ${pokemon.name}`}
              />
            </div>
          </div>
          <div className="flex w-full text-white">
            Habitat: <b className="capitalize ml-2">{pokemon.habitat}</b>
          </div>
          <div className="text-primary_light3 font-semibold">
            {pokemon.weight}kg {pokemon.height}m
          </div>
          <div className="mt-10 flex w-full px-2 flex-wrap">
            <div className="flex w-1/2">
              <div className="w-full relative bg-red_dark rounded-full h-4 flex items-center mr-1">
                <div className="-top-[20px] -left-2 absolute text-white bg-red_light px-2 rounded-t-2xl rounded-l-2xl text-sm font-medium">
                  HP
                </div>
                <div
                  className="bg-red h-4 flex items-center rounded-full w-20 text-white text-sm"
                  style={{
                    width: `${(pokemonHP * 100) / (pokemonHP + 100)}%`,
                  }}
                >
                  <span className="mx-auto">{pokemonHP}</span>
                </div>
                <span className="ml-auto text-white text-sm mr-1">
                  {pokemonHP + 100}
                </span>
              </div>
            </div>
            <div className="flex w-1/2">
              <div className="w-full relative bg-yellow_dark rounded-full h-4 flex items-center ml-1">
                <div className="-top-[20px] -right-2 absolute text-white bg-yellow_light px-2 rounded-t-2xl rounded-r-2xl text-sm font-medium">
                  Speed
                </div>
                <div
                  className={`bg-yellow h-4 flex items-center rounded-full text-white text-sm`}
                  style={{
                    width: `${(pokemonSpeed * 100) / (pokemonSpeed + 100)}%`,
                  }}
                >
                  <span className="mx-auto">{pokemonSpeed}</span>
                </div>
                <span className="ml-auto text-white text-sm mr-1">
                  {pokemonSpeed + 100}
                </span>
              </div>
            </div>
            <div className="flex w-1/2 mt-10">
              <div className="w-full relative bg-purple_dark rounded-full h-4 flex items-center mr-1">
                <div className="-top-[20px] -left-2 absolute text-white bg-purple_light px-2 rounded-t-2xl rounded-l-2xl text-sm font-medium">
                  Atack
                </div>
                <div
                  className="bg-purple h-4 flex items-center rounded-full w-20 text-white text-sm"
                  style={{
                    width: `${(pokemonAtack * 100) / (pokemonAtack + 100)}%`,
                  }}
                >
                  <span className="mx-auto">{pokemonAtack}</span>
                </div>
                <span className="ml-auto text-white text-sm mr-1">
                  {pokemonAtack + 100}
                </span>
              </div>
            </div>
            <div className="flex w-1/2 mt-10">
              <div className="w-full relative bg-blue_dark rounded-full h-4 flex items-center ml-1">
                <div className="-top-[20px] -right-2 absolute text-white bg-blue_light px-2 rounded-t-2xl rounded-r-2xl text-sm font-medium">
                  Defense
                </div>
                <div
                  className={`bg-blue h-4 flex items-center rounded-full text-white text-sm`}
                  style={{
                    width: `${
                      (pokemonDefense * 100) / (pokemonDefense + 100)
                    }%`,
                  }}
                >
                  <span className="mx-auto">{pokemonDefense}</span>
                </div>
                <span className="ml-auto text-white text-sm mr-1">
                  {pokemonDefense + 100}
                </span>
              </div>
            </div>
            <div className="flex w-full mt-10">
              <div className="w-full relative bg-green_dark rounded-full h-4 flex items-center ml-1">
                <div className="-top-[20px] -left-2 absolute text-white bg-green_light px-2 rounded-t-2xl rounded-l-2xl text-sm font-medium">
                  Total
                </div>
                <div
                  className={`bg-green h-4 flex items-center rounded-full text-white text-sm`}
                  style={{
                    width: `${(pokemonTotal * 100) / 1000}%`,
                  }}
                >
                  <span className="mx-auto">{pokemonTotal}</span>
                </div>
                <span className="ml-auto text-white text-sm mr-1">1000</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <strong className="text-primary_light4 text-xl font-medium">
              Evolutions
            </strong>
            <div className="flex justify-between">
              {pokemon.evolution.map((evolution) => (
                <div
                  key={evolution.id}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="text-primary_light3">#{evolution.id}</div>
                  <div className="text-primary_light4 capitalize">
                    {evolution.name}
                  </div>
                  <div>
                    <Image
                      width={76}
                      height={109}
                      src={evolution.img}
                      alt={`Imagem do pokemon ${pokemon.name}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
