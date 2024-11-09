import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts/ThemeContext'
import { aboutData } from '../../data/aboutData'
import styles from './About.module.css'

function About() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={styles['about']} id="about" style={{ backgroundColor: theme.secondary }}>
            <div className={styles['line-styling']}>
                <div className={styles['style-circle']} style={{ backgroundColor: theme.primary }}></div>
                <div className={styles['style-circle']} style={{ backgroundColor: theme.primary }}></div>
                <div className={styles['style-line']} style={{ backgroundColor: theme.primary }}></div>
            </div>
            <div className={styles['about-body']}>
                <div className={styles['about-description']}>
                    <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
                    <p style={{ color: theme.tertiary80 }}>
                        {aboutData.description1}
                        <br />
                        <br />
                        {aboutData.description2}
                    </p>
                </div>
                <div className={styles['about-img']}>
                    <img src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
