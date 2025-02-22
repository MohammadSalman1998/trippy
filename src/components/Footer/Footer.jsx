// src\components\Footer\Footer.jsx

import { FaBehance, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"
import './footer.css'

const Footer = () => {
    return (
        <>
           <div className="footer">
             <div className="top">
                 <div className="left">
                     <h1>Trippy</h1>
                     <p>Choose your favourite destination.</p>
                 </div>
                 <div className="right">
                     <Link to={'/'}><FaFacebook /></Link>
                     <Link to={'/'}><FaInstagram /></Link>
                     <Link to={'/'}><FaBehance /></Link>
                     <Link to={'/'}><FaTwitter /></Link>
                 </div>
             </div>
             <div className="bottom">
                 <div className="bottomLink">
                    <h2>Project</h2>
                     <Link to={'/'}>Changelog</Link>
                     <Link to={'/'}>Status</Link>
                     <Link to={'/'}>License</Link>
                     <Link to={'/'}>All Versions</Link>
                 </div>
                 <div className="bottomLink">
                    <h2>Community</h2>
                     <Link to={'/'}>GitHub</Link>
                     <Link to={'/'}>Issues</Link>
                     <Link to={'/'}>Project</Link>
                     <Link to={'/'}>Twitter</Link>
                 </div>
                 <div className="bottomLink">
                    <h2>Help</h2>
                     <Link to={'/'}>Support</Link>
                     <Link to={'/'}>Troubleshooting</Link>
                     <Link to={'/'}>Contact us</Link>
                 </div>
                 <div className="bottomLink">
                    <h2>Others</h2>
                     <Link to={'/'}>Terms of Service</Link>
                     <Link to={'/'}>Privacy Policy</Link>
                     <Link to={'/'}>License</Link>
                 </div>
             </div>
           </div>
        </>
    )
}

export default Footer