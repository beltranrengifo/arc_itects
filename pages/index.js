import Head from 'next/head'
import Hero from 'components/Hero/Hero'
import { defaultTitle, defaultDescription } from 'config/head'

const Home = () => {
  return (
    <div>
      <Head>
        <title>{defaultTitle}</title>
        <meta name="description" content={defaultDescription} />
      </Head>
      <main>
        <Hero />
      </main>
    </div>
  )
}
export default Home
