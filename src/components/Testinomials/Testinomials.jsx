import React, { useState } from 'react'
import './Testinomials.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

export default function Testinomials() {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    return (
        <div className="testinomials">
            <div className="left-t">
                <span>Testinomials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{ color: 'var(--orange)' }}>
                        {testimonialsData[selected].name}
                    </span>
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} />
                <div className="arrows">
                    <img onClick={() => {
                        selected === 0
                            ? setSelected(tLength - 1)
                            : setSelected((prev) => prev - 1)
                    }}
                        src={leftArrow} alt="" />
                    <img onClick={() => {
                        selected === tLength -1 
                        ?setSelected(0) 
                        :setSelected((prev) => prev +1)
                    }} src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}
