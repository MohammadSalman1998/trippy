// src\pages\SignUp\SignUp.jsx

import { Link } from "react-router-dom"
import ContactUs from "../../components/Forms/ContactUs/ContactUs"
import Hero from "../../components/Hero/Hero"

// eslint-disable-next-line react-refresh/only-export-components
export const itemsInput = [
    {
        id: 1,
        type: "text",
        placeholder: "Your Name"
    },
    {
        id: 2,
        type: "email",
        placeholder: "Your Email"
    },
    {
        id: 3,
        type: "password",
        placeholder: "Password"
    },
    {
        id: 4,
        type: "password",
        placeholder: "Repeat Your Password"
    },
  ]


const SignUp = () => {
  return (
    <div>
      <Hero content={<h1>Sign Up</h1>} hero={'hero2'} img={import.meta.env.BASE_URL+'assets/img/05.jpg'} />
      <ContactUs title={'Create an account'} itemsInput={itemsInput}  btnTitle={'Register'} otherLink={<p>Have already an account? <Link to={'/'}>Login here</Link></p>}/>
      </div>
  )
}

export default SignUp