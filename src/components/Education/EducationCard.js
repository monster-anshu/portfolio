import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fade from 'react-reveal/Fade'

import { ThemeContext } from '../../contexts/ThemeContext'
import styles from './Education.module.css'
import { theme } from '../../data/themeData'

const eduImgWhite = '/assets/svg/education/eduImgWhite.svg'
const eduImgBlack = '/assets/svg/education/eduImgBlack.svg'

const useStyles = makeStyles((t) => ({
    educationCard: {
        backgroundColor: theme.primary30,
        '&:hover': {
            backgroundColor: theme.primary50,
        },
    },
}))

function EducationCard({ id, institution, course, startYear, endYear }) {
    const { theme } = useContext(ThemeContext)

    const classes = useStyles()

    return (
        <Fade bottom>
            <div key={id} className={`${styles['education-card']} ${classes.educationCard}`}>
                <div className={styles['educard-img']} style={{ backgroundColor: theme.primary }}>
                    <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                </div>
                <div className={styles['education-details']}>
                    <h6 style={{ color: theme.primary }}>
                        {startYear}-{endYear}
                    </h6>
                    <h4 style={{ color: theme.tertiary }}>{course}</h4>
                    <h5 style={{ color: theme.tertiary80 }}>{institution}</h5>
                </div>
            </div>
        </Fade>
    )
}

export default EducationCard
