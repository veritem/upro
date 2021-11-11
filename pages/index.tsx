import type {NextPage} from 'next'
import Head from 'next/head'
import {Fragment} from 'react'

const Home: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Fronted starter</title>
            </Head>

            <section className="grid place-items-center h-screen w-screen font-primary">
                <h1 className="font-bold text-2xl">Fronted starter</h1>
            </section>
        </Fragment>
    )
}

export default Home
