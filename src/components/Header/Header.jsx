/* eslint-disable react/prop-types */
// src\components\Header\Header.jsx

import { Link } from "react-router-dom"
import './header.css'
import NavItems from "../NavItems/NavItems"
import { useState } from "react"
import { MdClose, MdMenu } from "react-icons/md"

const Header = ({ logo }) => {
    const [isOpen, setISopen] = useState(false)
    const open = ()=>{
        setISopen(!isOpen)
    }
    return (
        <>
            <header>
                <h1 className="logo"><Link to={'/'}>{logo}</Link></h1>
                <nav >
                    <NavItems open={!isOpen ? "open" : "close"}/>
                </nav>
                <button className="toggle" onClick={open}>{!isOpen?<MdMenu/>:<MdClose/>}</button>
            </header>
        </>
    )
}

export default Header