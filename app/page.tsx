'use client'
import Nav from '@/components/Nav'
import Head from 'next/head'
import { Fragment } from 'react'

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>upro</title>
            </Head>

            <section className="flex justify-center flex-col items-center h-screen w-screen font-primary">
                <h1 className="font-bold text-5xl py-8">upro</h1>

                <Nav />
            </section>
        </Fragment>
    )
}
