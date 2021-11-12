import {NextPage} from 'next'
import Head from 'next/head'
import {Fragment} from 'react'
import Link from 'next/link'

const About: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>about</title>
            </Head>
            <section className="font-primary grid place-content-center h-screen w-screen">
                <h1 className="text-4xl font-bold text-center py-4">About</h1>
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
