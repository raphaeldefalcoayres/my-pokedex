import Image from 'next/image'
import { HiChevronDoubleRight } from 'react-icons/hi'
import { Pokemon } from '../interfaces'
import { pokemonTypes } from '../utils'

export const PokemonCard = (pokemon: Pokemon) => {
  const pokemonHP: number = pokemon.stats.find((item) => item.stat.name === 'hp')?.base_stat || 0
  const pokemonSpeed: number = pokemon.stats.find((item) => item.stat.name === 'speed')?.base_stat || 0
  const pokemonAttack: number = pokemon.stats.find((item) => item.stat.name === 'attack')?.base_stat || 0
  const pokemonDefense: number = pokemon.stats.find((item) => item.stat.name === 'defense')?.base_stat || 0
  const pokemonTotal = pokemonHP + pokemonSpeed + pokemonAttack + pokemonDefense

  const typesPokemon = pokemon.types.split(',')
  const firstType = pokemonTypes.find((type: { name: string }) => {
    if (type.name === typesPokemon[0]) {
      return type
    }
    return false
  })

  return (
    <div className="flex flex-col mt-10 px-4 pt-4 w-full md:w-1/2 xl:w-1/4 2xl:w-1/5">
      <div className="group min-h-[350px] relative flex flex-col px-4 pt-4 rounded-[40px] w-full bg-primary_light2 shadow-sm transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="flex w-full">
          <div
            className={`-top-[27px] left-17 absolute text-white bg-${
              firstType ? firstType.color : 'yellow'
            } py-1 px-2 rounded-t-xl rounded-l-xl font-semibold`}
          >
            #{pokemon.id}
          </div>
          <div className="text-white text-xl font-semibold capitalize">{pokemon.name}</div>
          <div className="flex gap-2 mx-3">
            {typesPokemon.map((pokemonType) => {
              const typeData = pokemonTypes.find((type: any) => type.name === pokemonType)

              if (!typeData) return false

              return (
                <div
                  key={typeData.id}
                  title={typeData.name}
                  className={`w-7 h-7 flex items-center justify-center rounded-full bg-${typeData.color} text-${typeData.color}_dark`}
                >
                  {typeData.icon}
                </div>
              )
            })}
          </div>
          <div className="absolute -top-10 right-0 transition ease-in-out group-hover:-translate-y-1 group-hover:scale-125 duration-300">
            <Image width={120} height={170} src={pokemon.img} alt={`Imagem do pokemon ${pokemon.name}`} />
          </div>
        </div>
        <div className="flex w-full text-white">
          Habitat: <b className="capitalize ml-2">{pokemon.habitat}</b>
        </div>
        <div className="text-primary_light3 font-semibold">
          {pokemon.weight}kg {pokemon.height}m
        </div>

        <div className="mt-8 flex w-full px-2 flex-wrap">
          <div className="flex w-1/2">
            <div className="w-full relative bg-red_dark rounded-full h-4 flex items-center mr-1">
              <div className="-top-[16px] -left-2 absolute text-white bg-red_light px-2 rounded-t-2xl rounded-l-2xl text-xs font-medium">
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
              <span className="ml-auto text-white text-sm mr-1">{pokemonHP + 100}</span>
            </div>
          </div>
          <div className="flex w-1/2">
            <div className="w-full relative bg-yellow_dark rounded-full h-4 flex items-center ml-1">
              <div className="-top-[16px] -right-2 absolute text-white bg-yellow_light px-2 rounded-t-2xl rounded-r-2xl text-xs font-medium">
                Speed
              </div>
              <div
                className={`bg-yellow h-4 flex items-center rounded-full text-white text-xs`}
                style={{
                  width: `${(pokemonSpeed * 100) / (pokemonSpeed + 100)}%`,
                }}
              >
                <span className="mx-auto">{pokemonSpeed}</span>
              </div>
              <span className="ml-auto text-white text-sm mr-1">{pokemonSpeed + 100}</span>
            </div>
          </div>
          <div className="flex w-1/2 mt-3">
            <div className="w-full relative bg-purple_dark rounded-full h-4 flex items-center mr-1">
              <div className="-bottom-[16px] -left-2 absolute text-white bg-purple_light px-2 rounded-b-2xl rounded-l-2xl text-xs font-medium">
                Attack
              </div>
              <div
                className="bg-purple h-4 flex items-center rounded-full w-20 text-white text-xs"
                style={{
                  width: `${(pokemonAttack * 100) / (pokemonAttack + 100)}%`,
                }}
              >
                <span className="mx-auto">{pokemonAttack}</span>
              </div>
              <span className="ml-auto text-white text-sm mr-1">{pokemonAttack + 100}</span>
            </div>
          </div>
          <div className="flex w-1/2 mt-3">
            <div className="w-full relative bg-blue_dark rounded-full h-4 flex items-center ml-1">
              <div className="-bottom-[16px] -right-2 absolute text-white bg-blue_light px-2 rounded-b-2xl rounded-r-2xl text-xs font-medium">
                Defense
              </div>
              <div
                className={`bg-blue h-4 flex items-center rounded-full text-white text-xs`}
                style={{
                  width: `${(pokemonDefense * 100) / (pokemonDefense + 100)}%`,
                }}
              >
                <span className="mx-auto">{pokemonDefense}</span>
              </div>
              <span className="ml-auto text-white text-sm mr-1">{pokemonDefense + 100}</span>
            </div>
          </div>
          <div className="flex w-full mt-3">
            <div className="w-[60%] mx-auto relative bg-green_dark rounded-full h-4 flex items-center ">
              <div className="-bottom-[20px] left-1/2 -translate-x-1/2 absolute text-white bg-green_light px-2 rounded-b-xl text-sm font-medium">
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
        <div className="flex flex-col mt-3">
          {pokemon.evolution.length > 0 && (
            <strong className="text-primary_light4 text-xl font-medium">Evolutions</strong>
          )}
          <div className="flex justify-around">
            {pokemon.evolution.map((evolution) => (
              <div key={evolution.id} className="flex flex-col items-center justify-center relative">
                <div className="text-primary_light3">#{evolution.id}</div>
                <div className="text-primary_light4 capitalize">{evolution.name}</div>
                <div>
                  <Image width={76} height={109} src={evolution.img} alt={`Imagem do pokemon ${pokemon.name}`} />
                  {evolution.minLevel && (
                    <div
                      className={`absolute text-primary_light4 top-10 ${
                        pokemon.evolution.length === 2 ? '-left-11' : '-left-5'
                      }`}
                    >
                      <HiChevronDoubleRight />
                      {evolution.minLevel}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
