import React, { useContext } from 'react'
import Fade from 'react-reveal/Fade'

import { ThemeContext } from '../../../contexts/ThemeContext'
import styles from './SingleService.module.css'

function SingleService({ id, title, icon }) {
    const { theme } = useContext(ThemeContext)
    return (
        <Fade bottom>
            <div key={id} className={styles['single-service']} style={{ backgroundColor: theme.primary400 }}>
                <div className={styles['service-content']} style={{ color: theme.tertiary }}>
                    <i className={styles['service-icon']}>{icon}</i>
                    <h4 style={{ color: theme.tertiary }}>{title}</h4>
                </div>
            </div>
        </Fade>
    )
}

export default SingleService
