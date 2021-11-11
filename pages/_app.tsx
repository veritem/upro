import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {QueryClientProvider, QueryClient} from 'react-query'
import {ReactQueryDevtools} from "react-query/devtools"

const queryclient = new QueryClient()

function MyApp({Component, pageProps}: AppProps) {
    return (
        <QueryClientProvider client={queryclient}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default MyApp
