import en from '@/locales/en'
import fr from '@/locales/fr'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Moon, Sun } from 'react-feather'

export default function Nav() {
    const router = useRouter()
    const { locale, locales } = router

    const { theme, setTheme } = useTheme()

    const t = locale === 'en' ? en : fr

    return (
        <nav className="flex items-center gap-8">
            <Link href="/">
                <a className="text-base font-bold text-center py-4 text-blue-500 capitalize">
                    /{t.home}
                </a>
            </Link>
            <Link href="/about">
                <a className="text-base font-bold text-center py-4 text-blue-500 capitalize">
                    /{t.about}
                </a>
            </Link>

            <div>
                <button
                    id="theme-toggle"
                    onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                >
                    {theme === 'dark' ? <Sun /> : <Moon />}
                </button>
            </div>

            <select
                onChange={e => {
                    const locale = e.target.value
                    router.push(router.pathname, router.asPath, { locale })
                }}
                defaultValue={locale}
                className="dark:text-white text-black text-shadow-sm text-lg bg-transparent rounded-md"
            >
                {locales?.map(l => (
                    <option key={l} className="uppercase text-black" value={l}>
                        {l}
                    </option>
                ))}
            </select>
        </nav>
    )
}
