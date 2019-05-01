import React from 'react'
import styled from 'styled-components'

const UL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 -20px 0;
`

const LI = styled.li`
  width: calc(100% / 3);
  margin: 0 0 20px 0;
  font-size: 1.2rem;
`

const StarredRepository = props => (
  <UL className={props.className}>
    {props.repositories.map(repo => {
      return (
        <LI key={repo.id}>
          <a href={repo.url} target="_blank">
            {repo.name}
          </a>
        </LI>
      )
    })}
  </UL>
)

export default StarredRepository
