"use client"

import Link from "next/link"

export default function Pokecard(props) {

	return (
		<Link href={"/pokemon/" + props.name}>
			<article className="border border-gray-500 rounded-xl">
				<h2>{props.name}</h2>
			</article>
		</Link>
	)
}
