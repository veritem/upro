import Nav from '@/components/Nav'
import en from '@/locales/en'
import fr from '@/locales/fr'
import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { Moon, Sun } from 'react-feather'

const Home: NextPage = () => {
    const { theme, setTheme } = useTheme()

    const router = useRouter()
    const { locale } = router

    const t = locale === 'en' ? en : fr

    return (
        <Fragment>
            <Head>
                <title>upro</title>
            </Head>

            <section className="flex justify-center flex-col items-center h-screen w-screen font-primary">
                <h1 className="font-bold text-5xl py-8">upro</h1>

                <Nav />

                <p className="py-4" id="home-desc">
                    {t.intro}
                    <Link href="/about">
                        <a className="text-blue-500"> {t.readmore}</a>
                    </Link>
                </p>
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
            </section>
        </Fragment>
    )
}

export default Home
