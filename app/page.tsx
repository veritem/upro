'use client'

import Nav from '~/Nav'
import { Fragment } from 'react'
import { env } from "~/env.mjs"

export default function Home() {
	return (
		<Fragment>
			<section className="flex justify-center flex-col items-center h-screen w-screen font-primary">
				<h1 className="font-bold text-5xl py-8">upro</h1>
				<Nav />
			</section>
			<p>{env.NEXT_PUBLIC_APP_NAME}</p>
		</Fragment>
	)
}
