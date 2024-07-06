"use client"

import Pokecard from "@/components/pokecard"
import { useEffect, useState } from "react"

export default function Home() {
  const [data, setData] = useState([])

  useEffect(function() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1400")
      .then(res => res.json())
      .then(pokemon => setData(pokemon.results))
  }, [])

  return (
    <section className="grid grid-cols-3 gap-4 px-4">
      {data?.map(function (pokemon) {
      return <Pokecard name={pokemon.name} />
      })}
    </section>
  )
}
