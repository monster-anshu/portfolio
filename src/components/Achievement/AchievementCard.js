import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fade from 'react-reveal/Fade'

import { ThemeContext } from '../../contexts/ThemeContext'

import { AiOutlineFolder } from 'react-icons/ai'
import styles from './Achievement.module.css'
function AchievementCard({ id, title, details, date, field, image }) {
    const { theme } = useContext(ThemeContext)

    const useStyles = makeStyles((t) => ({
        achievementCard: {
            backgroundColor: theme.primary30,
            '&:hover': {
                backgroundColor: theme.primary50,
            },
        },
    }))

    const classes = useStyles()
    return (
        <Fade bottom>
            <div
                key={id}
                className={`${styles['achievement-card']} ${classes.achievementCard}`}
            >
                <div className={styles['achievecard-content']}>
                    <div className={styles['achievecard-details1']}>
                        <h2 style={{ color: theme.tertiary }}>{title}</h2>
                        <p style={{ color: theme.tertiary80 }}>{details}</p>
                    </div>
                    <div
                        className={styles['achievecard-details2']}
                        style={{ color: theme.primary }}
                    >
                        <h5>{date}</h5>
                        <div className={styles['achievecard-field']}>
                            <AiOutlineFolder />
                            <h5>{field}</h5>
                        </div>
                    </div>
                </div>
                <div className={styles['achievecard-imgcontainer']}>
                    <img src={image} alt="" />
                </div>
            </div>
        </Fade>
    )
}

export default AchievementCard
