import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Moon, Sun } from 'react-feather'

export default function Nav() {
    //const { theme, setTheme } = useTheme()

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
