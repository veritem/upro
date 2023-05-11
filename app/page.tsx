'use client'

import Nav from '~/Nav'
import { Fragment } from 'react'
import { env } from "~/env"

export default function Home() {
	console.log(env)
	return (
		<Fragment>
			<section className="flex justify-center flex-col items-center h-screen w-screen font-primary">
				<h1 className="font-bold text-5xl py-8">upro</h1>
				<Nav />
			</section>
		</Fragment>
	)
}
