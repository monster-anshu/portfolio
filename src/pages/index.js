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
import VoiceBotRunner from '../components/VoiceAgent/VoiceAgent'

function Main() {
    return (
        <div>
            <Head>
                <title>{headerData.name + ' - Portfolio'}</title>
            </Head>

            <Navbar />
            <VoiceBotRunner />
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
