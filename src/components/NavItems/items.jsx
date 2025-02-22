// src\components\NavItems\items.jsx

import { FaCircleInfo } from "react-icons/fa6"
import { ImHome } from "react-icons/im";
import { MdHomeRepairService } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";

export const items = [
    {
        id:1,
        icon:<ImHome className="icon"/>,
        href: '#/',
        name:'Home'
    },
    {
        id:2,
        icon: <FaCircleInfo className="icon"/>,
        href: '#/about',
        name:'About'
    },
    {
        id:3,
        icon:<MdHomeRepairService className="icon"/>,
        href: '#/services',
        name:'Service'
    },
    {
        id:4,
        icon:<BiSolidContact className="icon"/>,
        href: '#/contact',
        name:'Contact'
    },
    {
        id:5,
        icon:"",
        href: '#/signup',
        name:'Sign Up',
        signin: true
    },
]