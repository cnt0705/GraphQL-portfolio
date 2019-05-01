import React from 'react'

import UserName from './header/UserName'
import UserAvatar from './header/UserAvatar'
import UserBio from './header/UserBio'
import UserActivity from './header/UserActivity'
import '../assets/css/header.css'

import { formatDate } from '../lib/day'

function Header(props) {
  const user = props.user

  return (
    <header className='header-profile'>
      <div className='header-profile-inner'>
        <UserName name={user.name} link={user.url} className='header-profile-name'/>
        <UserAvatar url={user.avatarUrl} alt={user.name} className='header-profile-avator'/>
        <div className='header-profile-container'>
          <UserBio text={user.bio} className='header-profile-bio'/>
          <UserActivity title='Created' date={formatDate(user.createdAt)} className='header-profile-activity'/>
          <UserActivity title='Updated' date={formatDate(user.updatedAt)} className='header-profile-activity'/>
        </div>
      </div>
    </header>
  )
}

export default Header
