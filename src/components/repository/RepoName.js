import React from 'react'
import styled from 'styled-components'

const H3 = styled.h3`
  font-size: 1.4rem;
`

const LINK = styled.a`
`

const RepoName = props => (
  <H3 className={props.className}>
    <LINK href={props.url} target="_blank">
      {props.name}
    </LINK>
  </H3>
)

export default RepoName
