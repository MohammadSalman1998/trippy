// src\pages\Services\Services.jsx

import Card from "../../components/Card/Card"
import Hero from "../../components/Hero/Hero"
import TitleSection from "../../components/TitleSection/TitleSection"



const Services = () => {
  return (
    <div>
        <Hero content={<h1>Services</h1>} hero={'hero2'} img={'/public/assets/img/08.jpg'}/>
        <TitleSection title={'Recent Trips'} desc={'You can discover unique destination using Google Maps.'} />
        <Card/>
    </div>
  )
}

export default Services