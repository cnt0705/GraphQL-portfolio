import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
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
  <H1 className={props.className}>
    <Link href={props.link} target="_blank">{props.name}</Link>
  </H1>
)

export default UserName
