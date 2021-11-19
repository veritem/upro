import Link from 'next/link'

export default function Nav() {
    return (
        <nav className=" space-x-8">
            <Link href="/">
                <a className="text-base font-bold text-center py-4 text-blue-500">
                    /home
                </a>
            </Link>
            <Link href="/about">
                <a className="text-base font-bold text-center py-4 text-blue-500">
                    /about
                </a>
            </Link>
        </nav>
    )
}
