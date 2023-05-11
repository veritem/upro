'use client'

import Nav from '../Nav'
import { Fragment } from 'react'
import { GitHub, Twitter } from "react-feather"

export default function Page() {
	return (
		<Fragment>
			<section className="font-primary text-center grid place-content-center h-screen w-screen">
				<Nav />

				<ul className="text-left py-4 list-decimal px-10">
					<li>Next.js</li>
					<li>React query</li>
					<li>TailwindCSS</li>
					<li>Prettier</li>
					<li>ESLint</li>
					<li>TypeScript</li>
				</ul>

				<div className="flex items-center justify-center gap-4">
					<a
						href="https://github.com/veritem/upro"
						className="text-gray-500">
						<GitHub />
					</a>

					<a
						href="https://twitter.com/veritemm"
						className="text-gray-500"
					>
						<Twitter />
					</a>
				</div>
			</section>
		</Fragment>
	)
}

