// src\components\Forms\ContactUs\ContactUs.jsx
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// src\components\Forms\ContactUs\ContactUs.jsx

import './contactUs.css'

const ContactUs = ({ title, itemsInput, showTextArea, btnTitle, otherLink="" }) => {
    return (
        <>
            <div className='contact'>
                <h1>{title}</h1>
                <div className='inputs'>
                    <form action="">
                        {itemsInput.map((item) => <input type={item.type} placeholder={item.placeholder} />)}
                        <textarea className={showTextArea ? '' : 'heddin'} name="" id="message" rows={4} placeholder='Message'></textarea>
                        <button className='submit'>{btnTitle}</button>
                    </form>
                    {otherLink}
                </div>
            </div>
        </>
    )
}

export default ContactUs