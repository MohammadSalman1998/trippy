// src\pages\Home\Home.jsx

import { Link } from "react-router-dom"
import Hero from "../../components/Hero/Hero"
import TitleSection from "../../components/TitleSection/TitleSection"
import Section from "../../components/Section/Section"
import Card from "../../components/Card/Card"



const Home = () => {
    return (
        <>
            <Hero
                content={
                    <>
                        <h1>Your Journey Your Story</h1>
                        <p>Choose Your Favourite Destination.</p>
                        <Link to={'/#'}>Travel Now</Link>
                    </>
                }
                hero={'hero'}
            />
            <TitleSection title={'Popular Destinations'} desc={'Tours dive you the opportunity to see a lot, within a time frame.'} />
            <Section />
            <TitleSection title={'Recent Trips'} desc={'You can discover unique destination using Google Maps.'} />
            <Card />
        </>
    )
}

export default Home