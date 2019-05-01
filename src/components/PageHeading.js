import React from 'react'
import styled from 'styled-components'

const H2 = styled.h2`
  padding: 0 0 10px 0;
  border-bottom: #bbb 1px solid;
  font-weight: bold;
  font-size: 2.8rem;
`

const PageHeading = props => (
  <H2 className={props.className}>{props.text}</H2>
)

export default PageHeading
