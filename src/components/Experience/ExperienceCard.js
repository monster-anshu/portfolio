import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fade from 'react-reveal/Fade'

import { ThemeContext } from '../../contexts/ThemeContext'
import styles from './Experience.module.css'
import { theme } from '../../data/themeData'

const expImgWhite = '/assets/svg/experience/expImgWhite.svg'
const expImgBlack = '/assets/svg/experience/expImgBlack.svg'

const useStyles = makeStyles((t) => ({
    experienceCard: {
        backgroundColor: theme.primary30,
        '&:hover': {
            backgroundColor: theme.primary50,
        },
    },
}))

function ExperienceCard({ id, company, jobtitle, startYear, endYear }) {
    const { theme } = useContext(ThemeContext)

    const classes = useStyles()

    return (
        <Fade bottom>
            <div key={id} className={`${styles['experience-card']} ${classes.experienceCard}`}>
                <div className={styles['expcard-img']} style={{ backgroundColor: theme.primary }}>
                    <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
                </div>
                <div className={styles['experience-details']}>
                    <h6 style={{ color: theme.primary }}>
                        {startYear}-{endYear}
                    </h6>
                    <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
                    <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
                </div>
            </div>
        </Fade>
    )
}

export default ExperienceCard
