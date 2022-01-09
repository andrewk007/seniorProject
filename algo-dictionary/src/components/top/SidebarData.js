import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IOIcons from 'react-icons/io';
import * as FcIcons from 'react-icons/fc';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        className: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <FcIcons.FcAbout/>,
        className: 'nav-text'
    }
]