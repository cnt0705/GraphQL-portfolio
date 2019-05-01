import React from 'react'
import styled from 'styled-components'

const Heading = styled.h2`
  padding: 0 0 10px 0;
  border-bottom: #c71ad0 1px solid;
  font-weight: bold;
  font-size: 2.8rem;
`

const PageHeading = props => (
  <Heading className={props.className}>
    <a href={props.link}>{props.text}</a>
  </Heading>
)

export default PageHeading
