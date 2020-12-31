import Head from 'next/head'
import Header from '../components/global/header'
import css from '../styles/index.module.scss'

export default function Home({data}) {
    console.log(data)
    return (
        <div className={css.container}>
            <Head>
                <title>Antonin Barbier - {data.job}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={css.main}>
                <h1 className={css.title}>
                    <span>Antonin Barbier</span><br />
                    <span className={css.subtitle}>Développeur front-end</span>
                </h1>
            </main>
        </div>
    )
}
