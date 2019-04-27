import React from 'react'
import { formatDate } from '../lib/day'

function Header(props) {
  const user = props.user

  return (
    <header>
      <h1>
        <a href={user.url} target="_blank">
          {user.name}
        </a>
      </h1>
      <img src={user.avatarUrl} alt="User Avatar"/>
      <div>
        <p>{user.bio}</p>
        <ul>
          <li>
            <span>Since</span>
            <span>{formatDate(user.createdAt)}</span>
          </li>
          <li>
            <span>Update</span>
            <span>{formatDate(user.updatedAt)}</span>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
