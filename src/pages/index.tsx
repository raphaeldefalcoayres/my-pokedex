import { dehydrate, QueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { PokemonCard } from '../components/PokemonCard'
import { fetchHabitats, useHabitats } from '../hooks/useHabitats'
import { useMobileDetect } from '../hooks/useIsMobileDetect'
import { fetchPokemons, usePokemons } from '../hooks/usePokemons'
import { Pokemon } from '../interfaces'
import { pokemonTypes } from '../utils'

const Home = () => {
  const { isMobile } = useMobileDetect()
  const router = useRouter()
  const [typeSelected, setTypeSelected] = useState(router.query.types)
  const [habitatSelected, setHabitatSelected] = useState(router.query.habitat)
  const [openMenuMobile, setOpenMenuMobile] = useState(false)
  const { data: pokemons, isLoading } = usePokemons(router?.query)
  const { data: habitats } = useHabitats()

  useEffect(() => {
    if (router.query.types) setTypeSelected(router.query.types)
    if (router.query.habitat) setHabitatSelected(router.query.habitat)
  }, [router.query])

  if (isLoading) return <LoadingSpinner />

  function handlePushQueryFilter({ type, query }: { type: string; query: string }) {
    const prevQuery: any = router.query

    if (type === 'habitat' && prevQuery.habitat) {
      delete prevQuery.habitat
    }
    if (type === 'types' && prevQuery.types) {
      delete prevQuery.types
    }

    router.push(`?${new URLSearchParams(prevQuery).toString()}&${query}`)
  }

  function handleResetPokemons() {
    setTypeSelected('')
    setHabitatSelected('')
    router.push('/')
  }

  return (
    <>
      <header className="fixed z-40 w-full gap-2 md:gap-0 flex flex-col md:flex-row items-center py-2 px-2 bg-primary_light shadow-lg">
        <div className="flex w-full md:w-auto justify-between">
          <Image src="/logo.svg" width={154} height={34} alt="logotipo escrito My Pokedex" />
          {isMobile() && (
            <button className="" onClick={() => setOpenMenuMobile(!openMenuMobile)}>
              {!openMenuMobile ? <IoMdMenu className="ml-auto" size={32} /> : <IoMdClose size={32} />}
            </button>
          )}
        </div>
        <div
          className={`${
            isMobile() && !openMenuMobile ? 'hidden' : 'flex'
          } flex-col md:flex-row gap-2 md:gap-0 mx-auto items-center`}
        >
          <div className="flex mr-3">
            <FaFilter className="mr-2" />
            Filters:
          </div>
          <div className="bg-yellow rounded-xl px-2 py-2 text-primary_light mr-2">
            Total: <strong>{pokemons.length}</strong>
          </div>
          <div className="flex flex-wrap bg-primary rounded-xl p-2 gap-2">
            <a onClick={() => handleResetPokemons()}>
              <div
                title={`Select all`}
                className={`w-7 h-7 cursor-pointer flex items-center justify-center rounded-xl bg-white text-black ${
                  !typeSelected && !habitatSelected ? 'border-2 border-yellow shadow-sm shadow-yellow' : ''
                }`}
              >
                All
              </div>
            </a>
            {pokemonTypes
              .filter((type: any) => type.name !== 'eletric')
              .map((pokemonType: any) => (
                <a
                  onClick={() => handlePushQueryFilter({ type: 'types', query: `types=${pokemonType.name}` })}
                  key={`link-${pokemonType.name}`}
                >
                  <div
                    title={`Select a type ${pokemonType.name}`}
                    className={`w-7 h-7 cursor-pointer flex items-center justify-center rounded-xl bg-${
                      pokemonType.color
                    } text-${pokemonType.color}_dark  ${
                      typeSelected === pokemonType.name ? 'border-2 border-yellow shadow-sm shadow-yellow' : ''
                    }`}
                  >
                    {pokemonType.icon}
                  </div>
                </a>
              ))}
          </div>
          <div className="flex items-center ml-2">
            <select
              className="py-3 px-4 rounded-xl bg-primary"
              onChange={(e) => handlePushQueryFilter({ type: 'habitat', query: `habitat=${e.target.value}` })}
            >
              <option value="">Select habitat</option>
              {habitats &&
                Object.entries(habitats).map((habitat, index) => (
                  <option selected={habitatSelected === habitat[0]} key={index} value={habitat[0]}>
                    <>
                      {habitat[0]} [{habitat[1]}]
                    </>
                  </option>
                ))}
            </select>
          </div>
        </div>
      </header>
      <main className="flex flex-col md:flex-row md:flex-wrap pt-10">
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonCard key={pokemon.name} {...pokemon} />
        ))}
      </main>
    </>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['pokemons:all'], () => fetchPokemons())
  await queryClient.prefetchQuery(['habitats'], () => fetchHabitats())

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
