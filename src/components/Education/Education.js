import React, { useContext } from 'react'

import { ThemeContext } from '../../contexts/ThemeContext'

import EducationCard from './EducationCard'

import { educationData } from '../../data/educationData'
import styles from './Education.module.css'

function Education() {
    const { theme } = useContext(ThemeContext)
    return (
        <div
            className={styles['education']}
            id="resume"
            style={{ backgroundColor: theme.secondary }}
        >
            <div className={styles['education-body']}>
                <div className={styles['education-description']}>
                    <h1 style={{ color: theme.primary }}>Education</h1>
                    {educationData.map((edu) => (
                        <EducationCard
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
                <div className={styles['education-image']}>
                    <img src={theme.eduimg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Education
