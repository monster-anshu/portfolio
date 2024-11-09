import React, { useContext } from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'

import { ThemeContext } from '../../contexts/ThemeContext'
import { projectsData } from '../../data/projectsData'
import { HiArrowRight } from 'react-icons/hi'

import SingleProject from './SingleProject/SingleProject'
import styles from './Projects.module.css'
import { theme } from '../../data/themeData'

const useStyles = makeStyles(() => ({
    viewAllBtn: {
        color: theme.tertiary,
        backgroundColor: theme.primary,
        transition: 'color 0.2s',
        '&:hover': {
            color: theme.secondary,
            backgroundColor: theme.primary,
        },
    },
    viewArr: {
        color: theme.tertiary,
        backgroundColor: theme.secondary70,
        width: '40px',
        height: '40px',
        padding: '0.5rem',
        fontSize: '1.05rem',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        '&:hover': {
            color: theme.tertiary,
            backgroundColor: theme.secondary,
        },
    },
}))

function Projects() {
    const { theme } = useContext(ThemeContext)

    const classes = useStyles()

    return (
        <>
            {projectsData.length > 0 && (
                <div className={styles['projects']} id="projects" style={{ backgroundColor: theme.secondary }}>
                    <div className={styles['projects--header']}>
                        <h1 style={{ color: theme.primary }}>Projects</h1>
                    </div>
                    <div className={styles['projects--body']}>
                        <div className={styles['projects--bodyContainer']}>
                            {projectsData.slice(0, 3).map((project) => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))}
                        </div>

                        {projectsData.length > 3 && (
                            <div className={styles['projects--viewAll']}>
                                <Link href="/projects">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default Projects
