import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.li`
  width: calc((100% - 20px * 3) / 4);
  margin: 0 0 20px;

  &:not(:nth-child(4n)) {
    margin-right: 20px;
  }
`

const Link = styled.a`
  display: block;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  }
`

const Img = styled.img`
  width: 100%;
  height: auto;
  vertical-align: top;
`

function Relations(props) {
  return (
    <List>
      {props.users.map(user => {
        return (
          <Item key={user.id}>
            <Link href={user.url} target="_blank" rel="noopener noreferrer">
              <Img src={user.avatarUrl} alt={user.name} />
            </Link>
          </Item>
        )
      })}
    </List>
  )
}

export default Relations
