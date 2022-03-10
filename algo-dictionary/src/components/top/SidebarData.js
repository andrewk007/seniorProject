import React from 'react';

import * as AiIcons from "react-icons/ai";
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
    },
    {
        title: 'Algorithms',
        path: '/Algorithms',
        icon: <FcIcons.FcGallery/>,
        className: 'nav-text'
    }
]