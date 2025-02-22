// src\pages\Contact\Contact.jsx

import ContactUs from "../../components/Forms/ContactUs/ContactUs"
import Hero from "../../components/Hero/Hero"

// eslint-disable-next-line react-refresh/only-export-components
export const itemsInput = [
  {
      id: 1,
      type: "text",
      placeholder: "Name"
  },
  {
      id: 2,
      type: "email",
      placeholder: "Email"
  },
  {
      id: 3,
      type: "text",
      placeholder: "subject"
  },
]

const Contact = () => {
  return (
    <div>
      <Hero content={<h1>Contact</h1>} hero={'hero2'} img={import.meta.env.BASE_URL+'assets/img/05.jpg'} />
      <ContactUs title={'Send a message to us!'} itemsInput={itemsInput} showTextArea={true} btnTitle={'Send Message'}/>
      </div>
  )
}

export default Contact