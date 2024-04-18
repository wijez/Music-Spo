import React from 'react'

import './sidebar.css'
import SidebarButton from './sidebarButton'

import { IoLibrary } from "react-icons/io5";
import { GoSignOut } from "react-icons/go";
import { SiPlayerfm } from "react-icons/si";
import { IoMdTrendingUp } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineDynamicFeed } from "react-icons/md";


export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img 
        src='https://i.pinimg.com/236x/16/bc/6e/16bc6eb7d6e4693b6e81e9c01768d43a.jpg'
        className='profile-img'
        alt='profile' 
      />

      <SidebarButton title='Feed'  to='/feed' icon={<MdOutlineDynamicFeed/>}/>
      <SidebarButton title='Trending' to='/trending' icon={<IoMdTrendingUp/>} />
      <SidebarButton title='Library' to='/' icon={<IoLibrary/>} />
      <SidebarButton title='Favorites' to='/favorites' icon={<MdFavoriteBorder/>} />
      <SidebarButton title='Player' to='/player' icon={<SiPlayerfm/>} />
      <SidebarButton title='Signout' to='/signout' icon={<GoSignOut/>} />
    </div>
  )
}
