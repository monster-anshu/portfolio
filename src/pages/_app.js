import ThemeContextProvider from '../contexts/ThemeContext'
import ScrollToTop from '../utils/ScrollToTop'
import { BackToTop } from '../components'
import '../styles/App.css'
import '../styles/index.css'
import Head from 'next/head'
import { faqSchema, personSchema, profilePageSchema } from '../seo/rich-result'

const MyApp = ({ Component, pageProps }) => {
    console.log('%cDEVELOPER PORTFOLIO', `color:red; font-size:50px`)
    console.log('%chttps://github.com/hhhrrrttt222111/developer-portfolio', `color:red; font-size:20px`)

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
                        __html: JSON.stringify(profilePageSchema),
                    }}
                />
            </Head>
        </ThemeContextProvider>
    )
}

export default MyApp
