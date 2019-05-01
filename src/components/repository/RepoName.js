import React from 'react'
import styled from 'styled-components'

const H3 = styled.h3`
  font-size: 1.4rem;
`

const RepoName = props => (
  <H3 className={props.className}>
    <a href={props.url} target="_blank">
      {props.name}
    </a>
  </H3>
)

export default RepoName
