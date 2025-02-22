/* eslint-disable react/prop-types */
// src\components\NavItems\NavItems.jsx
import { NavLink } from "react-router-dom"
import { items } from './items'

const NavItems = ({open}) => {
    return (
        <>
            <ul className={open}>
                {
                    items.map((item) => {
                        return <li  key={item.id}><NavLink className={item.signin ? "signinbtn" : ""} to={item.href}>{item.icon} {item.name} </NavLink></li>
                    })
                }
            </ul>
        </>
    )
}

export default NavItems