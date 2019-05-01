import React from 'react'
import styled from 'styled-components'

const Name = styled.h1`
  font-weight: bold;
  font-size: 5rem;
`

const Link = styled.a`
  text-decoration: none;

  &:hover {
    color: #c71ad0;
  }
`

const UserName = props => (
  <Name className={props.className}>
    <Link href={props.link} target="_blank" rel="noopener noreferrer">{props.name}</Link>
  </Name>
)

export default UserName
