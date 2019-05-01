import React from 'react'
import styled from 'styled-components'

const Name = styled.h3`
  font-size: 1.4rem;
`

const RepoName = props => (
  <Name className={props.className}>
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      {props.name}
    </a>
  </Name>
)

export default RepoName
