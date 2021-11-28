import React from 'react'
import leftArrow from '../Carousel/icons/left-icon.png'
import rightArrow from '../Carousel/icons/right-icon.png'
import './buttonSliderStyle.css'

const ButtonSlider = ({ direction, changeSlide }) => {
    return (
        <button className={direction === "next" ? "button-slide next" : "button-slide prev"} 
            onClick={changeSlide}>
            <img className={"arrow-image"} src={direction === 'next' ? rightArrow : leftArrow} alt={direction === 'next' ? 'rightArrow' : 'leftArrow'} />
        </button>
    )
}
export default ButtonSlider