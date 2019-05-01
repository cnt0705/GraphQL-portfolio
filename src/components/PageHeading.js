import React from 'react'
import styled from 'styled-components'

const H2 = styled.h2`
  padding: 0 0 10px 0;
  border-bottom: #c71ad0 1px solid;
  font-weight: bold;
  font-size: 2.8rem;
`

const PageHeading = props => (
  <H2 className={props.className}>
    <a href={props.link}>{props.text}</a>
  </H2>
)

export default PageHeading
