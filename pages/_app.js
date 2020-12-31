import Head from 'next/head'
import '../styles/_app.scss'

function MyApp({ Component, pageProps }) {
    <Head>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    return <Component {...pageProps} />
}

export default MyApp
