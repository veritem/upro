import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>upro</title>
            </Head>

            <section className="flex justify-center flex-col items-center h-screen w-screen font-primary">
                <h1 className="font-bold text-5xl py-8">upro</h1>
                <p>
                    Modern fronted webstarter{' '}
                    <Link href="/about">
                        <a className="text-blue-700">Read more about it</a>
                    </Link>
                </p>
            </section>
        </Fragment>
    )
}

export default Home
