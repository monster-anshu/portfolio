import ThemeContextProvider from '../contexts/ThemeContext'
import ScrollToTop from '../utils/ScrollToTop'
import { BackToTop } from '../components'
import '../styles/App.css'
import '../styles/index.css'
import Head from 'next/head'

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
    url: 'https://himanshu-gunwant.com',
    image: 'https://raw.githubusercontent.com/monster-anshu/document/master/profile.webp',
    sameAs: [
        'https://www.instagram.com/its_.anshu._',
        'https://www.linkedin.com/in/himanshu-gunwant',
        'https://github.com/monster-anshu',
        'https://himanshu-gunwant.com',
    ],
    jobTitle: 'Software Developer',
    worksFor: {
        '@type': 'Organization',
        name: 'Acefone Software',
        url: 'https://acefone.com', // Adding the company website for more context
        logo: 'https://himanshu-gunwant.com/images/acefone/logo-label.png', // Optional: Add a logo for the organization
    },
    alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Dev Bhoomi Uttarakhand University', // Replace with your actual alma mater
        url: 'https://www.dbuu.ac.in',
    },
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        areaServed: 'IN',
        availableLanguage: 'English',
        telephone: '+91-7505064723', // Optional: Add a phone number for contact
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Gurgaon',
        addressRegion: 'Haryana',
        postalCode: '122016',
        addressCountry: 'IN',
    },
    mainEntityOfPage: 'https://himanshu-gunwant.com', // Defining the main entity for SEO purposes
    description:
        'Himanshu Gunwant is a passionate Software Developer with expertise in various programming languages and technologies. Currently working with Acefone Software.',
    sameAs: [
        'https://www.instagram.com/its_.anshu._',
        'https://www.linkedin.com/in/himanshu-gunwant',
        'https://github.com/monster-anshu',
        'https://himanshu-gunwant.com',
    ],
    knowsAbout: [
        'Software Development',
        // language
        'JavaScript',
        'Typescript',
        'PHP',
        'Kotlin',
        'Go Lang',
        // runtime
        'Node.js',
        // framework
        'React',
        'NestJs',
        'NextJs',
        'ReactJs',
        // database
        'Postgresql',
        'MongoDB',
        'MySql',
        // scale and cloud
        'Kafka',
        'Docker',
        'Kubernetes',
        'GCP',
        'Azure',
        'Git',
        'AWS',
        'Firebase',
        'Cloud Computing',
    ],
    additionalType: 'https://schema.org/Person',
}

export default MyApp
