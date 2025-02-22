// src\components\AboutSection\AboutSection.jsx

import Hero from "../Hero/Hero"
import './aboutSection.css'

const items = [
  {
    id: 1,
    titel: "Our History",
    description: "Trippy is owned and managed by Trippy .In Pvt. Ltd., a leading brand in web designing services and e-commerce solutions. rippy .In Pvt. Ltd. is counted for its expertise in web solutions and its top ranking business portals. Our invincible expertise and rich experience has raised our client's expectation. Commendable success rate of other portals managed by Trippy is a live paradigm of our work excellence."
  },
  {
    id: 2,
    titel: "Our Mission",
    description: "Our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients, that too with ultimate transparency and cost-effectiveness."
  },
  {
    id: 3,
    titel: "Our Vision",
    description: "To sow the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients."
  },
]

const AboutSection = () => {
  return (
    <div>
      <Hero content={<h1>About</h1>} hero={'hero2'} img={'/assets/img/07.jpg'} />
      {
        items.map((item) => {
          return (
            <>
              <div className='about'>
                <div key={item.id} className="content">
                  <h1>{item.titel}</h1>
                  <p>{item.description}</p>
                </div>
              </div>
            </>
          )
        })
      }
    </div>
  )
}

export default AboutSection