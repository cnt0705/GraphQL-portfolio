import React from 'react'

function Relations(props) {
  const users = props.users

  return (
    <ul>
      {users.map(user => {
        return (
          <li key={user.id}>
            <a href={user.url} target="_blank">
              <img src={user.avatarUrl} alt={user.name}/>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Relations
