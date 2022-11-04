import { AiTwotoneThunderbolt } from 'react-icons/ai'
import { FaBug, FaFire, FaGhost, FaLeaf, FaMountain, FaSkullCrossbones } from 'react-icons/fa'
import {
  GiBoxingGlove,
  GiCurlyWing,
  GiFairyWand,
  GiHealthNormal,
  GiIceCube,
  GiMetalBar,
  GiRollingEnergy,
  GiSpikedDragonHead,
} from 'react-icons/gi'
import { IoIosWater } from 'react-icons/io'
import { MdDarkMode } from 'react-icons/md'

export const pokemonTypes: any = [
  { name: 'grass', icon: <FaLeaf />, color: 'green' },
  { name: 'poison', icon: <FaSkullCrossbones />, color: 'purple' },
  { name: 'fire', icon: <FaFire />, color: 'red' },
  { name: 'water', icon: <IoIosWater />, color: 'blue' },
  { name: 'bug', icon: <FaBug />, color: 'green' },
  { name: 'flying', icon: <GiCurlyWing />, color: 'steel' },
  { name: 'normal', icon: <GiHealthNormal />, color: 'green' },
  { name: 'ground', icon: <FaMountain />, color: 'sand' },
  { name: 'psychic', icon: <GiRollingEnergy />, color: 'yellow' },
  { name: 'rock', icon: <FaLeaf />, color: 'rock' },
  { name: 'steel', icon: <GiMetalBar />, color: 'steel' },
  { name: 'eletric', icon: <AiTwotoneThunderbolt />, color: 'yellow' },
  { name: 'electric', icon: <AiTwotoneThunderbolt />, color: 'yellow' },
  { name: 'fighting', icon: <GiBoxingGlove />, color: 'steel' },
  { name: 'ghost', icon: <FaGhost />, color: 'steel' },
  { name: 'ice', icon: <GiIceCube />, color: 'steel' },
  { name: 'dragon', icon: <GiSpikedDragonHead />, color: 'red' },
  { name: 'fairy', icon: <GiFairyWand />, color: 'yellow' },
  { name: 'dark', icon: <MdDarkMode />, color: 'black' },
]
