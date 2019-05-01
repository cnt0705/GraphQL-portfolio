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
    <header className='user-profile'>
      <div className='user-profile-inner'>
        <UserName name={user.name} link={user.url} className='user-profile-name'/>
        <UserAvatar url={user.avatarUrl} alt={user.name} className='user-profile-avator'/>
        <div className='user-profile-container'>
          <UserBio text={user.bio} className='user-profile-bio'/>
          <UserActivity title='Created' date={formatDate(user.createdAt)} className='user-profile-activity'/>
          <UserActivity title='Updated' date={formatDate(user.updatedAt)} className='user-profile-activity'/>
        </div>
      </div>
    </header>
  )
}

export default Header
