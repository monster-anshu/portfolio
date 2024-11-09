import React, { useContext } from 'react'
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import { HiArrowRight } from 'react-icons/hi'

import { ThemeContext } from '../../contexts/ThemeContext'
import { blogData } from '../../data/blogData'
import SingleBlog from './SingleBlog/SingleBlog'
import styles from './Blog.module.css'
import { theme } from '../../data/themeData'

const useStyles = makeStyles(() => ({
    viewAllBtn: {
        color: theme.tertiary,
        backgroundColor: theme.primary,
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
        '&:hover': {
            color: theme.tertiary,
            backgroundColor: theme.secondary,
        },
    },
}))

function Blog() {
    const { theme } = useContext(ThemeContext)

    const classes = useStyles()

    return (
        <>
            {blogData.length > 0 && (
                <div className={styles['blog']} id="blog" style={{ backgroundColor: theme.secondary }}>
                    <div className={styles['blog--header']}>
                        <h1 style={{ color: theme.primary }}>Blog</h1>
                    </div>
                    <div className={styles['blog--body']}>
                        <div className={styles['blog--bodyContainer']}>
                            {blogData
                                .slice(0, 3)
                                .reverse()
                                .map((blog) => (
                                    <SingleBlog
                                        theme={theme}
                                        title={blog.title}
                                        desc={blog.description}
                                        date={blog.date}
                                        image={blog.image}
                                        url={blog.url}
                                        key={blog.id}
                                        id={blog.id}
                                    />
                                ))}
                        </div>

                        {blogData.length > 3 && (
                            <div className={styles['blog--viewAll']}>
                                <Link href="/blog">
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

export default Blog
