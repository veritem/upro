'use client'

import Nav from '@/components/Nav'
import { NextPage } from 'next'
import Link from 'next/link'
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
					<Link
						href="https://github.com/veritem/upro"
						className="text-gray-500">
						<GitHub />
					</Link>

					<Link
						href="https://twitter.com/veritemm"
						className="text-gray-500"
					>
						<Twitter />
					</Link>
				</div>
			</section>
		</Fragment>
	)
}

