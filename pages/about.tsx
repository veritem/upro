import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import Nav from "../components/Nav"

const About: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>about</title>
            </Head>

            <section className="font-primary text-center grid place-content-center h-screen w-screen">
                <Nav />
                <p className="py-2">
                    Web fronted starter to quickly build web apps faster
                </p>
                <p>
                    check it out on{' '}
                    <Link href="https://github.com/veritem/upro">
                        <a className="text-blue-500">github</a>
                    </Link>
                </p>
            </section>
        </Fragment>
    )
}

export default About
