import Link from 'next/link'

export default function Nav() {
	return (
		<nav className="flex items-center gap-8">
			<Link
				href="/"
				className="text-base font-bold text-center py-4 text-blue-500 capitalize"
			>
				/Home
			</Link>
			<Link
				href="/about"
				className="text-base font-bold text-center py-4 text-blue-500 capitalize"
			>
				/About
			</Link>
		</nav>
	)
}
