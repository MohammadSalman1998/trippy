/* eslint-disable react/prop-types */
// src\components\TitleSection\TitleSection.jsx
import './titleSection.css'


const TitleSection = ({title, desc}) => {
  return (
    <div className='headSection'>
        <h1>{title}</h1>
        <p>{desc}</p>
    </div>
  )
}

export default TitleSection