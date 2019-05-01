import React from 'react'
import styled from 'styled-components'

const UL = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const LI = styled.li`
  width: calc((100% - 20px * 3) / 4);
  margin: 0 0 20px;

  &:not(:nth-child(4n)) {
    margin-right: 20px;
  }
`

const LINK = styled.a`
  display: block;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  }
`

const IMG = styled.img`
  width: 100%;
  height: auto;
  vertical-align: top;
`

function Relations(props) {
  return (
    <UL>
      {props.users.map(user => {
        return (
          <LI key={user.id}>
            <LINK href={user.url} target="_blank">
              <IMG src={user.avatarUrl} alt={user.name}/>
            </LINK>
          </LI>
        )
      })}
    </UL>
  )
}

export default Relations
