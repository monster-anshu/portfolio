import React, { useContext, useRef } from 'react'

import Slider from 'react-slick'

import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from 'react-icons/fa'

import { ThemeContext } from '../../contexts/ThemeContext'
import { testimonialsData } from '../../data/testimonialsData'
import styles from './Testimonials.module.css'

function Testimonials() {
    const { theme } = useContext(ThemeContext)
    const sliderRef = useRef()

    const settings = {
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        margin: 3,
        loop: true,
        autoplaySpeed: 3000,
        draggable: true,
        swipeToSlide: true,
        swipe: true,
    }

    const gotoNext = () => {
        sliderRef.current.slickNext()
    }

    const gotoPrev = () => {
        sliderRef.current.slickPrev()
    }

    return (
        <>
            {testimonialsData.length > 0 && (
                <div className={styles['testimonials']} style={{ backgroundColor: theme.primary }} id="testimonials">
                    <div className={styles['testimonials--header']}>
                        <h1 style={{ color: theme.secondary }}>Testimonials</h1>
                    </div>
                    <div className={styles['testimonials--body']}>
                        <FaQuoteLeft className={styles['quote']} style={{ color: theme.secondary }} />
                        <div className={styles['testimonials--slider']} style={{ backgroundColor: theme.primary }}>
                            <Slider {...settings} ref={sliderRef}>
                                {testimonialsData.map((test) => (
                                    <div className={styles['single--testimony']} key={test.id}>
                                        <div className={styles['testimonials--container']}>
                                            <div
                                                className={styles['review--img']}
                                                style={{
                                                    backgroundColor: theme.secondary,
                                                }}
                                            >
                                                <img src={test.image} alt={test.name} />
                                            </div>
                                            <div
                                                className={styles['review--content']}
                                                style={{
                                                    backgroundColor: theme.secondary,
                                                    color: theme.tertiary,
                                                }}
                                            >
                                                <p>{test.text}</p>
                                                <h1>{test.name}</h1>
                                                <h4>{test.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <button className={styles['prevBtn']} onClick={gotoPrev} style={{ backgroundColor: theme.secondary }}>
                                <FaArrowLeft style={{ color: theme.primary }} aria-label="Previous testimonial" />
                            </button>
                            <button className={styles['nextBtn']} onClick={gotoNext} style={{ backgroundColor: theme.secondary }}>
                                <FaArrowRight style={{ color: theme.primary }} aria-label="Next testimonial" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Testimonials
