import Nav from '@/components/Nav'
import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import { Moon, Sun } from 'react-feather'

const Home: NextPage = () => {
    const { theme, setTheme } = useTheme()
    return (
        <Fragment>
            <Head>
                <title>upro</title>
            </Head>

            <section className="flex justify-center flex-col items-center h-screen w-screen font-primary">
                <h1 className="font-bold text-5xl py-8">upro</h1>

                <Nav />

                <p className="py-4">
                    modern fronted webstarter{' '}
                    <Link href="/about">
                        <a className="text-blue-500">read more </a>
                    </Link>
                </p>
                <div>
                    <button
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
