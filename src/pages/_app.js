import ThemeContextProvider from '../contexts/ThemeContext'
import ScrollToTop from '../utils/ScrollToTop'
import { BackToTop } from '../components'
import '../styles/App.css'
import '../styles/index.css'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => {
    console.log('%cDEVELOPER PORTFOLIO', `color:red; font-size:50px`)
    console.log(
        '%chttps://github.com/hhhrrrttt222111/developer-portfolio',
        `color:red; font-size:20px`,
    )

    return (
        <ThemeContextProvider>
            <div className="app">
                <Component {...pageProps} />
                <ScrollToTop />
                <BackToTop />
            </div>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema),
                    }}
                />
            </Head>
        </ThemeContextProvider>
    )
}
const schema = {
    '@context': 'https://schema.org/',
    '@type': 'Person',
    name: 'Himanshu Gunwant',
    url: 'https://profile-himanshu.vercel.app',
    image: 'https://raw.githubusercontent.com/monster-anshu/document/master/profile.jpg',
    sameAs: [
        'https://www.instagram.com/its_.anshu._',
        'https://www.linkedin.com/in/himanshu-gunwant',
        'https://github.com/monster-anshu',
        'https://profile-himanshu.vercel.app',
    ],
    jobTitle: 'Software Engineer',
    worksFor: {
        '@type': 'Organization',
        name: 'WebToNative',
    },
}
export default MyApp
