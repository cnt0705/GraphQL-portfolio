import React from 'react'
import styled from 'styled-components'

const Name = styled.h3`
  font-size: 1.4rem;
`

const Link = styled.a`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const RepoName = props => (
  <Name className={props.className}>
    <Link href={props.url} target="_blank" rel="noopener noreferrer">
      {props.name}
    </Link>
  </Name>
)

export default RepoName
