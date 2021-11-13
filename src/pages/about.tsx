import Nav from '@/components/Nav'
import {NextPage} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import {Fragment} from 'react'
import {GitHub} from 'react-feather'

const About: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>about</title>
            </Head>

            <section className="font-primary text-center grid place-content-center h-screen w-screen">
                <Nav />
                <p className="py-2">
                    Web fronted starter to swiftly build web apps faster
                </p>

                <ul className="text-left py-4 list-decimal px-10">
                    <li>
                        Next.js
                    </li>
                    <li>

                        React query
                    </li>

                    <li>
                        TailwindCSS
                    </li>
                    <li>
                        Prettier
                    </li>
                    <li>
                        ESLint
                    </li>
                    <li>

                        TypeScript
                    </li></ul>


                <p className="text-center">
                    <Link href="https://github.com/veritem/upro">
                        <a className="text-gray-500"><GitHub /></a>
                    </Link>
                </p>
            </section>
        </Fragment>
    )
}

export default About
