import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 -20px 0;
`

const Item = styled.li`
  width: calc(100% / 3);
  margin: 0 0 20px 0;
  font-size: 1.2rem;
`

const Link = styled.a`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const StarredRepository = props => (
  <List className={props.className}>
    {props.repositories.map(repo => {
      return (
        <Item key={repo.id}>
          <Link href={repo.url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </Link>
        </Item>
      )
    })}
  </List>
)

export default StarredRepository
