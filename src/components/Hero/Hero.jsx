/* eslint-disable react/prop-types */
// src\components\Hero\Hero.jsx
import './hero.css'

const Hero = ({content, hero, img}) => {
    return (
        <>
            <div className={hero}>
                <img src={img} alt="" />
                <div className="title">
                    {content}
                    
                </div>
            </div>
        </>
    )
}

export default Hero