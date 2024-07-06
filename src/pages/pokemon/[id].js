"use client"

import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function PokeDetail(props) {
	const router = useRouter()
	const [data, setData] = useState({})

	useEffect(function() {
		fetch("https://pokeapi.co/api/v2/pokemon/" + router.query.id)
			.then(res => res.json())
			.then(pokemon => setData(pokemon))
	}, [])

	return (
		<>
			<h2>{data.name}</h2>
			<Image src={data?.sprites?.other["official-artwork"].front_default} width={300} height={300} alt="" />
		</>
	)
}