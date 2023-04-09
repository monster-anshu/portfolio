import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts/ThemeContext'

import { experienceData } from '../../data/experienceData'
import ExperienceCard from './ExperienceCard'

import styles from './Experience.module.css'

function Experience() {
    const { theme } = useContext(ThemeContext)
    return (
        <div
            className={styles['experience']}
            id="experience"
            style={{ backgroundColor: theme.secondary }}
        >
            <div className={styles['experience-body']}>
                <div className={styles['experience-image']}>
                    <img src={theme.expimg} alt="" />
                </div>
                <div className={styles['experience-description']}>
                    <h1 style={{ color: theme.primary }}>Experience</h1>
                    {experienceData.map((exp) => (
                        <ExperienceCard
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience
