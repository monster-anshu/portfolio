import React from 'react'

import {
    Navbar,
    Footer,
    Landing,
    About,
    Skills,
    Testimonials,
    Blog,
    Education,
    Experience,
    Contacts,
    Projects,
    Services,
    Achievement,
} from '../components'
import { headerData } from '../data/headerData'
import Head from 'next/head'

function Main() {
    return (
        <div>
            <Head>
                <title>{headerData.name + ' - Portfolio'}</title>
            </Head>

            <Navbar />
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            {/* <Achievement /> */}
            <Services />
            <Testimonials />
            {/* <Blog /> */}
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
