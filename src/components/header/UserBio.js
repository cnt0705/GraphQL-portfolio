import React from 'react'
import styled from 'styled-components'

const Bio = styled.p`
  font-weight: bold;
  font-size: 2.6rem;
`

const UserBio = props => (
  <Bio className={props.className}>{props.text}</Bio>
)

export default UserBio
