import React, { useState } from 'react'
import ButtonSlider from '../ButtonSlider'
import './carouselStyle.css'

const Carousel = ({ data = [] }) => {
    const[slideIndex, setSlideIndex] = useState(0)

    const nextSlide = () => {
        if (slideIndex === data.length - 1)
            setSlideIndex(0)
        else 
            setSlideIndex(slideIndex => slideIndex + 1)
    }

    const previousSlide = () => {
        if (slideIndex === 0)
            setSlideIndex(data.length - 1)
        else
            setSlideIndex(slideIndex => slideIndex - 1)
    }

    return (
        <div className='carousel-container'>
            {data.map((dataObject, dataIndex) => {
                const { image, name } = dataObject || {}
                return (
                    <div className={slideIndex === dataIndex ? 'slide active-anim' : 'slide'}>
                        <img className={'slider-image'} src={image} alt={` Person ${name}`} />
                    </div>
                )
            })}
            <ButtonSlider direction={'next'} changeSlide={nextSlide} />
            <ButtonSlider direction={'prev'} changeSlide={previousSlide} />
            <div className='container-dots'>
                {[...new Array(data.length)].map((_, dotIndex) => {
                    return <div className={dotIndex === slideIndex ? 'bottom-dot active' : 'bottom-dot'} onClick={() => setSlideIndex(dotIndex)} />
                })}
            </div>
        </div>
    )
}

export default Carousel